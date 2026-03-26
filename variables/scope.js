// let hello = "hello world1" //global variable
// {
//     let hello = "Hello world" //block or local variable
//     console.log(hello)
// }

// console.log(hello)





// let hello = "hello world1" //global variable
// {
//     console.log(hello)  //can access
// }

// {
//     let hello = "hello world1" //local variable
// }
// console.log(hello)  //cannot access


/////////////////// examples ///////////////

// ex1
// let username1 = "Alice";
// function changeUsername(){
//     username1 = "Bob"
// }
// changeUsername();
// console.log(username1) //Bob


// ex2
// let username = "Alice";
// function changeUsername(){
//    let username = "Bob"
//    console.log(username) //Bob
// }
// changeUsername();
// console.log(username); //Alice


// ex3
// let i
// for(i=0; i<10; i++){
//     // console.log(i)
// }
// console.log(i) //10


// let x = 1;
// {
//     let x = 2;
//     {
//         x = 3;
//         console.log("Innermost", x) // 3
//     }
//     console.log("middle", x); // 3
// }
// console.log("global", x) // 1


// Cannot access 'a' before initialization
// console.log(a)
// let a = 5;

//  Cannot access 'b' before initialization
// console.log(b)
// const b = 6;


// console.log(c); //undefined
// var c = 7;

// hoisting: when the code is getting executed the declaration of the variable 
// is taken to the  top of its scope           


// {
//     console.log(a);
//     var a = 10;
// }

// the above will look like the below one after hoisting
// {
//     var a;
//     console.log(a);
//     a = 10;
// }


// Note: hoisting is applied on var variables and functions


// functions can be called before its declaration
// when fucntions are hoisted the whole fucntion is taken to the top of its scope
// greet();
// function greet(){
//     console.log("hello");
// }


// function expression
// let greet2 = function(){
//     console.log("hello2")
// }
// greet2();

// function expressions are not hoisted
// greet2();   //error 
// let greet2 = function(){    //will give error with var, let, const
//     console.log("hello2")
// }



// // temporal dead zone: it is the period in JS where a let or const variable exists in its scope but 
// // cannot be accessed until declaration is reached;
// {
//     console.log(x) // ref error (TDZ active)
//     let x = 10;     //TDZ eds here
//     console.log(x) // 10
// }


// //////////////// var //////////////////////////

// var is global scope
// {
//     {
//         var a = 5;
//     }
// }
// console.log(a); // 5

// for(var i = 0; i<10;i++){}
// console.log(i)

// if var is inside a function it will become function scoped
// function func(){
//     var a = 5;
// }
// func();
// console.log(a)


// var variables can be redeclared
var a = 5;
var a = 6;
console.log(a)