// function A (){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res(1)
//         },3000)
//     })
// }
// function B (){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res(2)
//         },2000)
//     })
// }
// function C (){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     })
// }


// async function execute(){
//     try{
//         const res1 = await A();
//         console.log(res1)
//         const res2 = await B();
//         console.log(res2)
//         const res3 = await C();
//         console.log(res3)
//     }catch(err){
//         console.log(err)
//     }
// } 
// execute()


// Promise.all([
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("A")
//         },3000)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("B")
//         },2000)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("C")
//         },1000)
//     }),
// ]).then((item)=>console.log(item))
// .catch((errr)=>console.log(errr))

// Promise.all takes an array of promises as arg and returns a new promise
// the new promise resolves when all the listed promises are resolved and the 
// array of their results become its result

// Promise.all either gives me the results of all the fulfilled promises in an array
// or the first rejected promise 


// fetching multiple api's in parallel
// async function testing(){
//     try{
//         let res = await  Promise.all([
//             fetch("https://api.github.com/users/iliakan"),
//             fetch("https://api.github.com/users/remy"),
//             fetch("https://api.github.com/users/jeresig")
//         ])

//         const dataArray = await Promise.all(res.map(item => item.json())) 
//         console.log(dataArray)

//         // res.map( async(item)=>{
//         //     let data = await item.json();
//         //     console.log(data);
//         // })
//     }catch(err){
//         console.log(err)
//     }
// }
// testing();




// Promise.allSettled

// Promise.allSettled([
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             rej("A")
//         },3000)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("B")
//         },2000)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("C")
//         },1000)
//     }),
// ]).then((item)=>console.log(item))
// .catch((errr)=>console.log(errr))

// [
//     {
//         "status": "rejected",
//         "reason": "A"
//     },
//     {
//         "status": "fulfilled",
//         "value": "B"
//     },
//     {
//         "status": "fulfilled",
//         "value": "C"
//     }
// ]

// Promise.allSettled just waits for all promises to settle
// regardless of its result (unlike Promise.all which 
// stops as soon as a promise is rejected)


// Promise.race([
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("A")
//         },3000)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("B")
//         },200)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             rej("C")
//         },1000)
//     }),
// ]).then((item)=>console.log(item))
// .catch((errr)=>console.log(errr))
// // B

// // Promise.race gives me the first promise that
// // settles (ie it does not care if the promise
// // fullfilled or rejected)





// Promise.any([
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("A")
//         },3000)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             rej("B")
//         },200)
//     }),
//     new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("C")
//         },1000)
//     }),
// ]).then((item)=>console.log(item))
// .catch((errr)=>console.log(errr))
// // C

// // Promise.any gives me the result of
// //  1st promise that resolves or fullfils

// fetch("https://jsonplaceholder.typicode.com/posts"),
// fetch("https://jsonplaceholder.typicode.com/comments"),
// fetch("https://jsonplaceholder.typicode.com/users")

async function testing(){
    try{
        let res = await  Promise.any([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments"),
        ])

        const data = await res.json()
        console.log(data)

    }catch(err){
        console.log(err)
    }
}
testing();