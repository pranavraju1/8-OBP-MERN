// function A(callback){
//     setTimeout(()=>{
//         console.log(1)
//         if(callback)callback(); 
//     },2000)
// }

// function B(callback){
//     setTimeout(()=>{
//         console.log(2)
//         if(callback)callback(); 
//     },2000)
// }

// function C(){
//     setTimeout(()=>{
//         console.log(3)
//     },2000)
// }

// // try to run the first setTimeout then second then third
// A(()=>{
//     B(()=>{
//         C()
//     })
// });


// // Async operations are getting executed in a particular order
// // the next async operation is dependet on the execution of the 
// // 1st async operation


// function getCheese(callback){
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log("here is the:", cheese);
//         callback(cheese)
//     },2000)
// }

// function makeDough(cheese, callback){
//     setTimeout(()=>{
//         const dough = cheese + "🫓";
//         console.log("here is dough:", dough);
//         callback(dough)
//     },2000)
// }

// function bakePizza(dough, callback){
//     setTimeout(()=>{
//         const pizza = dough + "🍕";
//         console.log("here is pizza:", pizza);
//         callback(dough)
//     },2000)
// }

// getCheese((cheese)=>{
//     makeDough(cheese, (dough)=>{
//         bakePizza(dough,(pizza)=>{
//             console.log("got my pizza", pizza)
//         })
//     })    
// })

// Above callback hell


// Promises
// its a special object that represents the eventual completion or failure of an async
// operation and resulting value

// // promise creation
// const promise1 = new Promise(function(resolve, reject){
    
//     //do async tasks
//     // DB calls, cryptography etc 
//     setTimeout(()=>{
//         console.log("Async task is completed")

//         // you have to call resolve here to connect with .then
//         resolve();
//     },1000)
// })

// // consuming a promise
// promise1.then(function(){
    
//     //this will only be printed after the promise is done executing 
//     console.log("Promise is resolved")
// })



// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task is completed")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise is resolved")
// });



// // data consumption
// const promise2 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Fetching Data")
//         data = {name:"pranav", age:20}
//         resolve(data);
//     },1000)
// }).then(function(user){
//     // console.log(user)
//     console.log("Promise is resolved", user.name)
// });


// reject and settle
// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Fetching Data")
//         let error = true
//         if(!error){
//             data = {name:"pranav", age:20}
//             resolve(data);
//         }else{
//             reject("Something went wrong")
//         }
//     },1000)
// }).then(function(user){
//     console.log("Promise is resolved", user.name)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("promise has executed")
// })





// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Fetching Data")
//         data = {name:"pranav", age:20}
//         resolve(data)
//     },1000)
// }).then(function(user){
//     console.log("Promise is resolved", user)
//     return user
// }).then((user)=>{
//     console.log(user.name)
//     return user
// }).then((user)=>{
//     console.log(user.age)
// })



function getCheese(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const cheese = "🧀";
            res(cheese)
        },2000)
    })
}

function makeDough(cheese){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const dough = cheese + "🫓";
            res(dough)
        },2000)
    })
}

function bakePizza(dough){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const pizza = dough + "🍕";
            res(pizza)
        },2000)
    })
}

// getCheese((cheese)=>{
//     makeDough(cheese, (dough)=>{
//         bakePizza(dough,(pizza)=>{
//             console.log("got my pizza", pizza)
//         })
//     })    
// })





getCheese().then((cheese)=>{
    console.log("here is the ",cheese)
    return makeDough(cheese)
}).then((dough)=>{
    console.log("here is my dough", dough)
    return bakePizza(dough)
}).then((pizza)=>{
    console.log("here is the pizza", pizza)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("pizza is ready")
})