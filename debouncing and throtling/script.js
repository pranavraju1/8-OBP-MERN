
// const debounce = (fn, delay) => {
//     let timerId;
//     return function(...args){
//         clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             fn(...args)
//         }, delay)
//     }
// }

// // this is the callback fn
// const search = (query) => {
//     document.getElementById("result").textContent = "Searching for: " + query
//     console.log("Searching for: " + query)
// }

// const searchWithDebounce = debounce(search, 1000);

// const input = document.getElementById("serachInput")
// input.addEventListener('input', (e)=>{
//     searchWithDebounce(e.target.value)
// })

// Debouncing -> it delays the execuution until events sstop for a period
// only last call runs 



// Throtling
// const throttle = (fn, delay) => {
//     let lastCall = 0;
//     return function(...args){
//         const now = Date.now();
//         if(now - lastCall < delay){
//             return
//         }
//         lastCall = now;
//         return fn(...args)
//     }
// }

// const burstShoot = () => {
//     console.log("shoot")
// }

// const shootWithThrottle = throttle(burstShoot, 1000);

// const shoot = document.getElementById("shoot")
// shoot.addEventListener('click', (e)=>{
//     shootWithThrottle()
// })



// https://jsonplaceholder.typicode.com/users?name_like=E

async function fetchData(value){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    const data = await res.json();
    data.map(item=>{
        console.log(item.name)
    })
} 


const input = document.getElementById("serachInput")
input.addEventListener('input', (e)=>{
    fetchData(e.target.value)
})
