// const showBtn = document.querySelector('#showBtn');
// const modal = document.querySelector('.modal')

// showBtn.addEventListener("click",()=>{
//     modal.classList.toggle("d-none")
// })

// const close = document.querySelector('#close');

// close.addEventListener("click",()=>{
//     modal.classList.toggle("d-none")

// })



// selecting all radio btns
// const radioBtns = document.querySelectorAll('input[name="gender"]')

// const submit = document.querySelector("#submit")

// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const selectedRadioBtn = document.querySelector('input[name="gender"]:checked')
//     console.log(selectedRadioBtn.value)
// })



// checkbox component details

// const submit = document.querySelector("#submit")
// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let checkedElemets = [];
//     const checkBtns = document.querySelectorAll('input[name="hobby"]')
//     checkBtns.forEach(item=>{
//         if(item.checked){
//             checkedElemets.push(item.value)
//         }
//     })
//     console.log(checkedElemets)
// })





// select input
// const submit = document.querySelector("#submit")
// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     // single option
//     // console.log(select.options[select.options.selectedIndex].value)

//     const select = document.querySelector("#fruits")
//     console.log(select.options)
//     let selectedValues = Array.from(select.options)
//     .filter(option => option.selected)
//     .map(item=> item.value)
//     console.log(selectedValues)
    
// })


// focus and blur
// const input = document.querySelector("#input")
// const error = document.querySelector("#error")
// input.onblur = function(){
//     if(!input.value.includes('@')){
//         error.innerHTML = "Please enter valid email"
//     }
// }
// input.onfocus = function(){
//     error.innerHTML = ""

// }

// change (blur)
const input = document.querySelector("#input")
input.addEventListener('change',()=>{
    console.log("hello")
})
const h3 = document.querySelector("h3")
// input
input.addEventListener('input',(e)=>{
    console.log(e.target.value)
    h3.textContent = e.target.value
})