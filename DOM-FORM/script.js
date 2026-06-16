// targetting my form element
// const form = document.getElementById("my-form")
const form = document.forms.myForm


// targeting input using id
// const addressInput = document.getElementById("addressInput");

// targeting input using form elements (ideal)
// const addressInput = form.elements.address;


const name = form.elements.name;
const address = form.elements.address;
const age = form.elements.age;
const userInfo = form.elements.userInfo;

let people = []
let tbody = document.querySelector("tbody")

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const personObj = {};

    if(!name.value.trim()){
        return
    }else{
        personObj.name = name.value; 
    }

    // task2
    // do form validation for address age and userInfo
    // users below the age of 18 should not be allowed in the table


    personObj.address = address.value; 
    personObj.age = age.value; 
    personObj.userInfo = userInfo.value; 

    people.push(personObj)
    tbody.innerHTML=""
    createTable(people);
    // reset all the values in form
    form.reset();
})

// task every time i enter values in the form and click on submit
// it should enter the detials inside my table

// make the below table dynamic
// name     adress      age     userInfo
// pranav  pune         20      asdasdasd
// sourav  goa          21      asdasdasd
// anjali  delhi        8      asdasdasd








function createTable(people){
    people.map((item)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td")
        td1.textContent = item.name;
        let td2 = document.createElement("td")
        td2.textContent = item.address;
        let td3 = document.createElement("td")
        td3.textContent = item.age;
        let td4 = document.createElement("td")
        td4.textContent = item.userInfo;
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tbody.append(tr)
    })
}

