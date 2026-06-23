// local storage

// // storing values in local storage
// localStorage.setItem(<key>, <value>)
// localStorage.setItem('name', 'pranav')

// // fetching values in local storage
// let value = localStorage.getItem('name');
// console.log(value) //pranav

// localStorage.setItem('name2', 'sourav')
// localStorage.setItem('name2', 'rahul')
// let value2 = localStorage.getItem('name2');
// console.log(value2) //rahul

// // reset values in localstorage
// localStorage.setItem("name2", "");

// // removing a specefic key value pair from localStorage
// localStorage.removeItem("name2")

// localStorage.setItem("name2", "asdasd");
// localStorage.setItem("name3", "zxczxczx");

// console.log(localStorage.length)    //2

// // removing all your key value pairs from localStorage
// localStorage.clear();


// LocalStorage -> its a browser storage given to a website that allows
// persistant key value pairs with no expiration time
// data survives when browser restarts and is accessible accross all 
// tabs/windows of the "same origin"

// chrome, firefoxm, edge -> 10MB
// Safari -> 5MB
// how to check the storage in local storage
// if(navigator.storage && navigator.storage.estimate){
//     navigator.storage.estimate().then(est => {
//         console.log(`Used: ${est.usage} of ${est.quota} bytes`)
//     })
// }


// localStorage.setItem("number", 5)
// localStorage.setItem("array", [1,2,3,4,5])
// localStorage.setItem("object", {name:"pranav"})

// console.log(5)
// console.log(parseInt(localStorage.getItem("number")) )
// console.log(localStorage.getItem("array"))
// console.log(localStorage.getItem("object"))




// localStorage.setItem("number", JSON.stringify(5))
// localStorage.setItem("array", JSON.stringify([1,2,3,4,5]))
// localStorage.setItem("object", JSON.stringify({name:"pranav"}))

// console.log( JSON.parse(localStorage.getItem("number")))
// console.log( JSON.parse(localStorage.getItem("array")))
// console.log( JSON.parse(localStorage.getItem("object")))


// the below script will only run whent the document has been loaded
// document.addEventListener("DOMContentLoaded",()=>{
    
//     console.log( JSON.parse(localStorage.getItem("number")))
//     console.log( JSON.parse(localStorage.getItem("array")))
//     console.log( JSON.parse(localStorage.getItem("object")))

// })




// let countDisplay = document.getElementById("countDisplay")
// let increase = document.getElementById("increase")
// let decrease = document.getElementById("decrease")

// let count = JSON.parse(localStorage.getItem("count"))|| 0;

// countDisplay.textContent = count;

// increase.addEventListener('click',()=>{
//     count++;
//     countDisplay.textContent = count;
//     localStorage.setItem("count", JSON.stringify(count))
// })
// decrease.addEventListener('click',()=>{
//     count--;
//     countDisplay.textContent = count;
//     localStorage.setItem("count", JSON.stringify(count))
// })






// Session storage->
// persists:  until tab/window is closed
// scope: single tab
// storage limit: 5 - 10MB
// use case: temporary session data

// Note: both local and session storage can survive a reload

sessionStorage.setItem("name", "pranav")
console.log(sessionStorage.getItem("name"))