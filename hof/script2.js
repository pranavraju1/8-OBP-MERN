// function greet(){
//     console.log("hello")
// }
// greet();

// function a(){
//     console.log("a")
// }
// function b(){
//     console.log("b")
// }

// let arr =  [a, b];
// let obj = {
//     A: a,
//     B: b
// }
// // arr[1]();
// obj.A();


// function greet(){
//     console.log("hello")
// }


// function outer(fn){
//     fn();
// }

// outer(greet)

// Callback -> a callback is simply a function passed into another function to be executed later,
// the outermost function decides the execution of the inner fucntion

// function calculator (a , b, fn){
//     return fn(a, b)
// }

// // callback
// function add (a, b){
//     return a + b;
// }

// // callback
// function mul (a, b){
//     return a * b;
// }

// console.log(calculator(1, 2, add))
// console.log(calculator(4, 5, mul))




// let calculator = (a, b, fn) => fn(a,b);

// let add = (a, b) => a + b;

// let mul = (a, b) => a * b;

// console.log(calculator(1, 2, add))
// console.log(calculator(4, 5, mul))


// HOF

// function outer(){

//     return function(){
//         console.log("hello")
//     }
// }

// let resultFromOuter =  outer();
// resultFromOuter();
// Or
// outer()();







// let outer = () =>{
//     return () => {
//         console.log("hello")
//     }
// }
// outer()();
// HOF -> it is a function which either accepts another fucntion as an arg or returns a function


// // Give the output -> "Hi Pranav"
// // implement the calling
// function createGreeter(greetings){
//     return function (name){
//         return greetings + " " + name
//     }
// }

// let result = createGreeter("Hi");
// console.log(result("Pranav"))
// // Or
// // console.log(createGreeter("Hi")("Pranav"));


// Closures
// Closure happens when an inner function remembers variables from the outer function, 
// even after the outer func has finished the execution
// function outer (){

//     let count = 0;
    
//     return function (){
//         count++;
//         console.log(count)
//     }
// }

// const counter = outer();
// counter();  //1
// counter();  //2
// counter();  //3
// counter();  //4


function ATM (){
    let pin = 12345; //private
    
    let balance = 5000;
    
    let accoutNo = 123123123;

    return function() {
        return balance
    }
}

const seeBalace = ATM();
console.log(seeBalace());