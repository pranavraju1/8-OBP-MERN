import isAdult from "./filterAge.js";
const name = document.getElementById("name");
const age = document.getElementById("age");
const display = document.getElementById("display");
const submit = document.getElementById("submit");
let users = [];
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let obj = {
        name: name.value,
        age: age.value
    }
    
    let flag = isAdult(obj.age)
    if(!flag) return;

    users.push(obj);
    display.innerHTML= ""
    users.map((item)=>{
        let li = document.createElement("li");
        li.textContent = item.name;
        display.appendChild(li)
    })
})



