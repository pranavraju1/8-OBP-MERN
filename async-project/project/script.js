        // ========== CONFIGURATION ==========
        const CONFIG = {
            DEBOUNCE_MS: 400,     // Input debouncing delay
            TIMEOUT_MS: 3500,     // Per-source timeout
            SOURCES: ['A', 'B', 'C']
        };


        // ========== STATE ==========
        const STATE = {
            currentMode: 'parallel',
            activeRequestId: 0,
            abortController: null,
            debounceTimer: null,
            totalSearches: 0,
            cancelledRequests: 0,
            isSearching: false
        };


        // ========== UTILITIES ==========


        /** Updates status display */
        function setStatus(message, type = 'info') {
            const el = document.getElementById('status');
            el.textContent = message;
            el.className = `status ${type}`;
        }


        /** Updates metrics counters */
        function updateMetrics() {
            document.getElementById('totalSearches').textContent = STATE.totalSearches;
            document.getElementById('cancelledCount').textContent = STATE.cancelledRequests;
        }


        /** Renders single source result */
        function renderSource(sourceId, status, data = {}) {
            const sourceEl = document.querySelector(`[data-source="${sourceId}"]`);
            sourceEl.className = `source ${status}`;


            const statusMap = {
                loading: `<div class="loading-text">🔄 Loading... (${Math.round(Math.random()*1000+500)}ms)</div>`,
                success: `<div class="status-text success">✅ Success (${data.duration || 0}ms)</div>` +
                         (data.results || []).map(r =>
                            `<div class="result-item">
                                <div class="result-title">${r.title}</div>
                                <div class="result-meta">${r.meta}</div>
                            </div>`
                         ).join(''),
                error: `<div class="status-text error">❌ ${data.message || 'API Error'}</div>`,
                timeout: `<div class="status-text timeout">⏰ Request timed out</div>`,
                cancelled: `<div class="status-text">↩️ Cancelled (newer search active)</div>`
            };


            sourceEl.innerHTML = `<h3>Source ${sourceId}</h3>${statusMap[status] || '<div class="placeholder">Ready</div>'}`;
        }


        /** Resets all sources */
        function resetSources() {
            CONFIG.SOURCES.forEach(id => renderSource(id, 'idle'));
        }


        /** Core cancellation logic using AbortController */
        function cancelActiveRequests(reason = 'Cancelled') {
            if (STATE.abortController) {
                STATE.abortController.abort(reason);
                STATE.abortController = null;
                STATE.cancelledRequests++;
                updateMetrics();
                CONFIG.SOURCES.forEach(id => renderSource(id, 'cancelled'));
                setStatus('❌ Search cancelled', 'warning');
                STATE.isSearching = false;
                toggleButtons();
            }
            clearTimeout(STATE.debounceTimer);
        }


        /** Enables/disables control buttons */
        function toggleButtons() {
            document.getElementById('cancelBtn').disabled = !STATE.isSearching;
            document.getElementById('searchBtn').disabled = STATE.isSearching;
        }


        // ========== DEBOUNCING ==========
        /** Debounced search - KEY FEATURE: avoids firing on every keystroke */
        const debouncedSearch = (function() {
            return function(query) {
                clearTimeout(STATE.debounceTimer);
                STATE.debounceTimer = setTimeout(() => {
                    if (query.trim()) executeSearch(query.trim());
                }, CONFIG.DEBOUNCE_MS);
            };
        })();


        // ========== API SIMULATOR ==========
        /** Simulates real API with AbortController support */
        function simulateApi(sourceId, query, requestId, signal) {
            return new Promise((resolve, reject) => {
                const delay = 800 + Math.random() * 4000;  // 800-4800ms
                const willFail = Math.random() < 0.25;     // 25% failure rate
                const timeout = setTimeout(() => {
                    if (signal.aborted) return reject(new DOMException('AbortError'));


                    if (willFail) {
                        reject(new Error(`Source ${sourceId} service unavailable`));
                    } else {
                        const results = [
                            { title: `${query} Guide (${sourceId})`, meta: 'Documentation' },
                            { title: `${query} Tutorial (${sourceId})`, meta: 'Step-by-step' }
                        ];
                        resolve({ sourceId, results, duration: delay, requestId });
                    }
                }, delay);


                signal.addEventListener('abort', () => clearTimeout(timeout), { once: true });
            });
        }


        /** Timeout wrapper using Promise.race */
        function withTimeout(promise, ms) {
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout')), ms)
            );
            return Promise.race([promise, timeoutPromise]);
        }


        // ========== SEARCH MODES ==========


        /** PARALLEL: Promise.allSettled - handles partial failures gracefully */
        async function searchParallel(query) {
            const requestId = ++STATE.activeRequestId;
            const controller = new AbortController();
            STATE.abortController = controller;


            setStatus('🔄 Parallel search (all sources at once)...', 'info');
            STATE.isSearching = true;
            toggleButtons();


            const promises = CONFIG.SOURCES.map(async sourceId => {
                renderSource(sourceId, 'loading');
                try {
                    const result = await withTimeout(
                        simulateApi(sourceId, query, requestId, controller.signal),
                        CONFIG.TIMEOUT_MS
                    );
                    return requestId === STATE.activeRequestId ? result : null;
                } catch (error) {
                    return { sourceId, error };
                }
            });


            const results = await Promise.allSettled(promises);


            if (requestId !== STATE.activeRequestId) return;


            results.forEach((result, i) => {
                const sourceId = CONFIG.SOURCES[i];
                if (result.status === 'fulfilled' && result.value) {
                    renderSource(sourceId, 'success', result.value);
                } else {
                    const error = result.reason?.error;
                    if (error?.message === 'Timeout') renderSource(sourceId, 'timeout');
                    else if (error?.name === 'AbortError') renderSource(sourceId, 'cancelled');
                    else renderSource(sourceId, 'error', { message: error?.message });
                }
            });


            STATE.isSearching = false;
            toggleButtons();
            setStatus('✅ Parallel complete (partial OK)', 'success');
            STATE.totalSearches++;
            updateMetrics();
        }


        /** SEQUENTIAL: async/await loop - results appear gradually */
        async function searchSequential(query) {
            const requestId = ++STATE.activeRequestId;
            const controller = new AbortController();
            STATE.abortController = controller;


            setStatus('🔄 Sequential search (one-by-one)...', 'info');
            STATE.isSearching = true;
            toggleButtons();


            for (const sourceId of CONFIG.SOURCES) {
                if (requestId !== STATE.activeRequestId) break;


                renderSource(sourceId, 'loading');
                try {
                    const result = await withTimeout(
                        simulateApi(sourceId, query, requestId, controller.signal),
                        CONFIG.TIMEOUT_MS
                    );
                    if (requestId === STATE.activeRequestId) {
                        renderSource(sourceId, 'success', result);
                    }
                } catch (error) {
                    if (requestId === STATE.activeRequestId) {
                        if (error.message === 'Timeout') renderSource(sourceId, 'timeout');
                        else if (error.name === 'AbortError') renderSource(sourceId, 'cancelled');
                        else renderSource(sourceId, 'error', { message: error.message });
                    }
                }
            }


            STATE.isSearching = false;
            toggleButtons();
            setStatus('✅ Sequential complete', 'success');
            STATE.totalSearches++;
            updateMetrics();
        }


        /** FASTEST: Promise.any - first success cancels others */
        async function searchFastest(query) {
            const requestId = ++STATE.activeRequestId;
            const controllers = new Map();


            setStatus('⚡ Fastest result race...', 'info');
            STATE.isSearching = true;
            toggleButtons();


            const promises = CONFIG.SOURCES.map(sourceId => {
                const ctrl = new AbortController();
                controllers.set(sourceId, ctrl);
                renderSource(sourceId, 'loading');
                return withTimeout(
                    simulateApi(sourceId, query, requestId, ctrl.signal),
                    CONFIG.TIMEOUT_MS
                ).catch(e => ({ error: e }));
            });


            try {
                const winner = await Promise.any(promises);
                if (requestId === STATE.activeRequestId) {
                    renderSource(winner.sourceId, 'success', winner);
                    // Cancel losers
                    controllers.forEach((ctrl, id) => {
                        if (id !== winner.sourceId) {
                            ctrl.abort();
                            renderSource(id, 'cancelled');
                        }
                    });
                    setStatus(`⚡ ${winner.sourceId} won (${winner.duration}ms)!`, 'success');
                }
            } catch {
                CONFIG.SOURCES.forEach(id => renderSource(id, 'error'));
                setStatus('❌ All sources failed', 'error');
            }


            STATE.isSearching = false;
            toggleButtons();
            STATE.totalSearches++;
            updateMetrics();
        }


        /** Main orchestrator */
        async function executeSearch(query) {
            cancelActiveRequests('New search');  // CRITICAL: cleanup first
            resetSources();


            switch (STATE.currentMode) {
                case 'parallel': await searchParallel(query); break;
                case 'sequential': await searchSequential(query); break;
                case 'fastest': await searchFastest(query); break;
            }
        }


        // ========== EVENT HANDLERS ==========
        document.getElementById('searchInput').addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });


        document.getElementById('searchBtn').addEventListener('click', () => {
            executeSearch(document.getElementById('searchInput').value);
        });


        document.getElementById('cancelBtn').addEventListener('click', () => {
            cancelActiveRequests('Manual cancel');
        });


        // Mode switching
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.mode-btn.active').classList.remove('active');
                btn.classList.add('active');
                STATE.currentMode = btn.dataset.mode;
                cancelActiveRequests('Mode changed');
                setStatus(`Mode: ${STATE.currentMode}`, 'info');
            });
        });


        // Page cleanup
        window.addEventListener('beforeunload', cancelActiveRequests);


        // Init
        resetSources();
        updateMetrics();
        toggleButtons();
