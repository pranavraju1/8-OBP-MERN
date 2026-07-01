
// function getCheese(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const cheese = "🧀";
//             res(cheese)
//         },2000)
//     })
// }

// function makeDough(cheese){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const dough = cheese + "🫓";
//             // res(dough)
//             rej("dough is expired")
//         },2000)
//     })
// }

// function bakePizza(dough){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const pizza = dough + "🍕";
//             res(pizza)
//         },2000)
//     })
// }


// async function func() {}
// const func = async() =>{}

// async function func() {
//     const res1 = await getCheese();
//     console.log("here is my cheese: ",res1)
//     const res2 = await makeDough(res1);
//     console.log("here is my dough: ",res2);
//     const res3 = await bakePizza(res2)
//     console.log("here is my pizza" ,res3)
// }
// func()


// the word async before a function means: a function always returns a promise.
// await works only inside async functions
// await makes JS wait until the promise settles and returns its result
// ie. it suspends the function execution until the promise settles and ressumes it with the result



// async function func() {
//     try{
//         const res1 = await getCheese();
//         console.log("here is my cheese: ",res1)
//         const res2 = await makeDough(res1);
//         console.log("here is my dough: ",res2);
//         const res3 = await bakePizza(res2)
//         console.log("here is my pizza" ,res3)
//     }catch(error){
//         console.log("errror", error)
//     }finally{
//         console.log("promise is executed")
//     }
// }
// func()


// function fetchData(){
//     let flag = false;
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             if(flag){
//                 res({message: "data fetched successfully", data: [1,2,3,4,5,6]})
//             }else{
//                 rej({message: "error in fetching data"})
//             }
//         },1000)
//     })
// }


// fetchData().then(data=>{
//     console.log(data.data)
// }).catch(error=>{
//     console.log(error.message)
// })

// async function fetching(){
//     try{
//         const res = await fetchData();
//         console.log(res.data)
//     }catch(errr){
//         console.log(errr.message)
//     }
// }
// fetching();


// https://jsonplaceholder.typicode.com/todos/1

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res =>{
//     let data = res.json();
//     return data
// }).then((finalData)=>{
//     console.log(finalData)
// })

// async function fetchData(){
//     try{
//         const res =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await res.json();
//         console.log(data)
//     }catch(err){
//         console.log("error message", err)
//     }
// }
// fetchData();

//fetch is browser API to send HTTP requests and read responses
// it returns a promise that is usuallly chained with json() to parse JSON data





const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
const posts = document.getElementById("posts");


async function fetchData(){
    try{
        showLoading();
        const res = await fetch(API_URL);
        const data = await res.json();
        render(data)
    }catch(error){
        posts.innerHTML = "<h1>URL is wrong</h1>"
    }
}

fetchData();

function render(data){
    posts.innerHTML = "";
    data.map(item=>{
        const div = document.createElement("div")
        div.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`
        posts.appendChild(div);
    })

}

function showLoading(){
    posts.innerHTML = "<h1>Loading....</h1>";
}