// // push: adds one or more element at the end of the array and returns the new length
// let fruits = ["apple", "banana"];
// // syntax
// // array.push(<element you want to add>)
// fruits.push("chikoo");
// console.log(fruits) //[ 'apple', 'banana', 'chikoo' ]

// // returnedValue is the new length of the array
// let returnedValue = fruits.push("orange") 

// console.log("returnedValue", returnedValue) //4

// console.log(fruits) //[ 'apple', 'banana', 'chikoo', 'orange' ]


// let arr = [1,2,3,4,5];
// arr.push(6,7,8,9)
// console.log(arr)

// let name = [];
// name.push("name1");
// name.push("name2");

// console.log(name)


// task1 add the elements from fruits1 to fruits2
// let fruits1 = [ 'apple', 'banana', 'chikoo', 'orange' ];
// let fruits2 = []

// for(let i=0; i<fruits1.length; i++){
//     fruits2.push(fruits1[i])
// }
// console.log(fruits2)

// task2: write a fucntion that takes an empty array as an input and adds even numbers from 1 to 10

// let arr = [];
// function addEvenElements(array){
//     for(let i=1;i<=10;i++){
//         if(i%2==0){
//             array.push(i)
//         }
//     }
//     console.log(array)
// }
// addEvenElements(arr)



///////////////////////////////    pop        /////////////////////////////////////////////

// pop: removes the last element fromt an array and return that element

// let arr = [1,2,3,4,5];

// //syntax
// // array.pop() 
// arr.pop();  //[1,2,3,4]
// arr.pop();  //[1,2,3]
// arr.pop();  //[1,2]
// arr.pop();  //[1]
// arr.pop();  //[]
// // if you pop an empty array it will give you an empty array
// arr.pop();  //[]

// console.log(arr)


// let arr = [1,2,3,4,5];
// // pop returns the poped element
// let result1 = arr.pop();
// console.log(result1);

//  let arr = [1,2,3,4,5];
//  for(let i=0; i<arr.length; i++){
//     arr.pop();
//  }
//  let result = arr
//  console.log(result) //[1,2]


// task you are given an array [1,2,3,4,5] create 2 functions
// 1st function is called removeLastElement -> removes the last element of the array
// and works only if there are elements in the array

// 2nd is undo function which undos only the previous action

// // example:
// let arr = [1,2,3,4,5]
// // removeLastElement() // [1,2,3,4]
// // undo()  //[1,2,3,4,5]
// let undoElemet;

// function removeLastElement(array){
//     if(arr.length>0){
//         undoElemet = array.pop();
//     }
// }

// function undo(){
//     if(undoElemet){
//         arr.push(undoElemet);
//     }
//     undoElemet = null;
// }
// removeLastElement(arr)  //[1,2,3,4]
// removeLastElement(arr)  //[1,2,3]
// console.log(arr)
// undo()  //[1,2,3,4]
// console.log(arr)

//HW store undo elements in an array such that you can undo multiple elements 


// /////////////////////////////   shift() //////////////////////

// removes the first element from an array returns that element


// let arr = [1,2,3,4,5];

// arr.shift();    //[2,3,4,5];

// // returns the removed element
// let result = arr.shift();

// console.log(arr)
// console.log(result)






// ///////////////////////   unshift() ///////////////////////

// adds one or more elements to the begining of an array and returns the new length

let arr = [1,2,3,4,5];

arr.unshift(0); //[ 0, 1, 2, 3, 4, 5 ]

// arr.unshift(-4, -3, -2, -1)

let result = arr.unshift(-1);

console.log(arr);
console.log(result);