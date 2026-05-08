

// let Greet = function(messsage){
//     console.log(messsage);

//     return messsage + " " + "pranav"
// }
// let resultFromFunction = Greet("hello");
// console.log(resultFromFunction);


// Arrow function


// let Sum = (a, b) => {
//     return a + b
// }     

// let Sum = (a, b) => a + b    

// Note: the above 2 Sum functions are the same -> if there is no {} after the arrow (=>) it mean .
// whatever is written on the right is returned 


// console.log(Sum(2,3));/



// let func = (a,b) => a - b; 
// let func = () => "hello"; 
// let func = () => [1,2,3,4,5]; 

// let func = () => { name: "pranav" }; //this will return undefined bc of {}

// let func = () =>{
//     return { name: "pranav" }
// } ; 
// let func = () => ({ name: "pranav" })   //this is how you return an obj in a single line

// console.log(func());

// Arrow function defination -> These provide a shorter syntax for functions expression.


let arr = [5,2,1,2,3,4];

// arr.sort(function (a,b){
//     return a - b;
// });

// arr.sort((a,b) => {
//     return a - b;
// })
arr.sort((a,b) => a - b)
console.log(arr);