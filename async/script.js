// console.log("start")
// console.log(1)
// for(let i=0; i<1e9; i++){}
// console.log("heavy operation");
// console.log("end")

// setTimeout
// syntax
// setTimeout(callback, time);

// console.log("start")
// console.log(1)
// setTimeout(()=>{
//     console.log("heavy operation")
// },2000)

// console.log("end")
// // start    1   end    heavy operation

// // sync operations -> line-by-line execution of the code ie. blocks the next line until it finishes
// // Async operations -> runs in the background ie. its non-blocking in nature


// function greet(){
//     console.log("hello")
// }

// setTimeout(greet, 2000)

// //with arguments 
// // setTimeout(()=>greet("pranav") ,2000)


// console.log("start")
// setTimeout(()=>{
//     console.log("time 1")
// },2000)
// setTimeout(()=>{
//     console.log("time 2")
// },100)
// setTimeout(()=>{
//     console.log("time 3")
// },0)
// console.log("end")

// // start end time3 time2 time1



// console.log("Start")
// setTimeout(()=>{
// console.log("timer 1")
// },1000)
// setTimeout(()=>{
// console.log("timer 2")
// },1000)
// setTimeout(()=>{
// console.log("timer 3")
// },0)
// setTimeout(()=>{
// console.log("timer 4")
// },0)
// console.log("end")
// // start end timer3 timer4  timer1  timer2


// setTimeout(function tick(){
//     alert("tick");
//     setTimeout(tick, 2000)
// },2000)

// console.log(
//     setTimeout(()=>{
//         console.log("hello")
//     },1000)
// )
// console.log(
//     setTimeout(()=>{
//         console.log("hello2")
//     },1000)
// )




// setTimeout returns you an id which can be later used to 
// clear the timer
// let timerId =  setTimeout(()=>{
//         console.log("hello")
// },1000)
// console.log(timerId)
// // clearing the execution of the timer
// clearTimeout(timerId)



// setInterval
// setInterval(()=>{
//     console.log("hello")
// },1000)

// creating a infinite counter
// let count = 0
// setInterval(()=>{
//     count++
//     console.log(count)
// },1000)

// function updateClock(){
//     const now = new Date();
//     document.getElementById("clock").innerText = now.toLocaleTimeString();
// }

// let intervalId =  setInterval(updateClock, 1000);

// // stopping the clock after 5 seconds
// setTimeout(()=>{
//     clearInterval(intervalId)
//     console.log("clock is stoped")
// },5000)



let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let count = 0;
timer.textContent = count;

let timerId = null;

startBtn.addEventListener("click",()=>{
    if(timerId == null){
        timerId = setInterval(()=>{
            count++;
            timer.textContent = count 
        },1000)
    }
})

stopBtn.addEventListener("click",()=>{
    clearInterval(timerId)
    timerId = null;
})









