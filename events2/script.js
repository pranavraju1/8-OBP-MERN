// let btn = document.querySelector('#btn');
// btn.addEventListener('click',(e)=>{
//     console.log(e)
//     if(e.altKey && e.shiftKey){
//         console.log("hello world")
//     }
// })


// let box = document.querySelector('.box');
// // 
// box.addEventListener('mouseover',()=>{
//     console.log("cursor is entering the element")
// })
// box.addEventListener('mouseout',()=>{
//     console.log("cursor is leaving the element")
// })


let btn = document.querySelector('#theme-toggle');
let body = document.querySelector('body')
btn.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    if(btn.textContent == "Light"){
        btn.textContent = "Dark"
    }else{
        btn.textContent = "Light"
    }
})