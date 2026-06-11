// click
// hover
// mouseover/mouseout  ->  cursor enters or leaves an elemet 
// mousedown/mouseup    -> mouse button is pressed and released
// keyup/keydown    ->  keyboard key is pressed and released
// submit           ->  when user submits form
// focus            -> when user focuses on an element

// alert("hello world")


// let btn = document.querySelector(".click-btn");

// btn.addEventListener('click',greet) //this is the right way

//here the function is called before the click is registered
// btn.addEventListener('click',greet())     

// function greet(){
//     alert("hello world")
// }

// btn.addEventListener('click', () => {
//      alert("hello world from callback");
// })



// event object
// btn.addEventListener('click', (e) => {
//     console.log(e.target)
//      alert("hello world from callback");
// })


// if you click on btn 1 it should the alert "btn 1 is clicked"
// if you click on btn 2 it should the alert "btn 2 is clicked"


// let btn1 = document.querySelectorAll(".click-btn")[0];
// let btn2 = document.querySelectorAll(".click-btn")[1];
// btn1.addEventListener('click',()=>{
//     alert('btn 1 is clicked')
// })
// btn2.addEventListener('click',()=>{
//     alert('btn 2 is clicked')
// })

// let btns = document.querySelectorAll('.click-btn');
// btns.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         let btnName = e.target.textContent 
//         console.log(`${btnName} is clicked`)
//         // alert(`${btnName} is clicked`)
//     })
// })


// let btn = document.querySelector(".click-btn");
// btn.addEventListener('click', func)


//here func should be the same in addEventListener
// and removeEventListener.
// make sure that if there is an event you want to remove
// in the future to not pass the function as an callback 
// btn.removeEventListener('click', func)

// function func(){
//     console.log("hello1")
// }



let form = document.querySelector('form');
let div = document.querySelector('div');
let p = document.querySelector('p');
form.addEventListener('click', ()=>alert("form is clicked"))
div.addEventListener('click', ()=>alert("div is clicked"))
p.addEventListener('click', ()=>alert("p is clicked"))

// Event Bubbling
// When an event happens on an elemet, it first runs the 
// handlers on it, then its parents, then all the way up to 
// it ancestors
