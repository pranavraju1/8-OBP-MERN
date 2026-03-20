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

// let arr = [1,2,3,4,5];

// arr.unshift(0); //[ 0, 1, 2, 3, 4, 5 ]

// // arr.unshift(-4, -3, -2, -1)

// let result = arr.unshift(-1);

// console.log(arr);
// console.log(result);


//////////////////////////  slice //////////////

// let arr = ["a", "b", "c", "d", "e", "f", "g"];
// // index =  0    1    2    3    4    5    6

// console.log(arr.slice(0,3))  //[ 'a', 'b', 'c' ]
// console.log(arr.slice(3))  //[ 'd', 'e', 'f', 'g' ]
// console.log(arr.slice(2,2))  //[]
// console.log(arr.slice(2,3))  //['c']
// console.log(arr.slice(-3))  //[ 'e', 'f', 'g' ]


// you are given an array and size write a fucntion to spilt the array into the given sizes.
// write a functon that takes the input and gives you the aproprate output.
// input: array = [1,2,3,4,5,6,7,8,9], size = 3
// output: [[1,2,3],[4,5,6],[7,8,9]] 

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // index =   0  1  2  3  4  5  6  7  8
// let size = 3

// function splitArray(arr, size){
//     let result = []
//     for(let i=0; i<arr.length; i += size){
//         result.push(arr.slice(i, i+size)) 
//         // arr.slice(0, 3)
//         // arr.slice(3, 6)
//         // arr.slice(6, 9)
//     }
//     return result
// }
// console.log(splitArray(array, size)) 

///////////// splice ///////////////////////////////

// remooving elements from and array
// let fruits = ["apple", "banana", "orange", "chikoo"];

// // please run the below line individually
// fruits.splice(2, 1) //[ 'apple', 'banana', 'chikoo' ]

// let deletedElements = fruits.splice(2, 2)   //[ 'orange', 'chikoo' ]

// fruits.splice(2)    //[ 'apple', 'banana' ]

// task: you are given an array of elements and your task is to remove all the falsy values from that array 
// input: arr = [1, 2, 0, 5, "a", null, udefined, 10, ""]
// output: arr = [1, 2, 5, "a" , 10]

// let arr = [1, 2, 0, 5, "a", null, undefined, 10, ""]
// for(let i=arr.length; i>=0; i--){
//     if(!arr[i]){
//         arr.splice(i,1)
//     }
// }
// console.log(arr);





// adding elements

// let fruits = ["apple", "banana"];
// fruits.splice(1 , 0 , "kiwi", "orange") //[ 'apple', 'kiwi', 'orange', 'banana' ]
// fruits.splice(fruits.length , 0 , "kiwi", "orange") //[ 'apple', 'kiwi', 'orange', 'banana' ]


// let fruits = ['apple', 'kiwi', 'orange', 'banana' ];
// fruits.splice(2,0,'pinapple') // fruits = ['apple', 'kiwi', 'pinapple' ,'orange', 'banana' ]
// console.log(fruits)


// negetive index
// let colors = ["red", "blue", "green"];
// colors.splice(-1,0,"yellow") //[ 'red', 'blue', 'yellow', 'green' ]
// console.log(colors)


//replacing elements

// let fruits = ["apple", "banana", "orange"];
// // replace banana with mango using splice:

// fruits.splice(1,1,'mango'); //[ 'apple', 'mango', 'orange' ]
// console.log(fruits)



// /////////////////   indexOf /////////////////////////

// let arr =  ["apple", "banana" , "kiwi", "orange" , "banana"];

// console.log(arr.indexOf("banana")); // 1
// console.log(arr.indexOf("strawberry")); //-1

// task search if strawberry exists in the above array
// let index =  arr.indexOf("strawberry")
// if(index == -1){
//     console.log("strawberry does not exits")
// }else{
//     console.log("strawberry exists")
// }



// let arr =  ["apple", "banana" , "kiwi", "orange"];

// arr.splice(arr.indexOf("kiwi"),1)

// console.log(arr)



///////////////// includes //////////////

// let arr =  ["apple", "banana" , "kiwi", "orange", "apple"];

// console.log(arr.includes("apple")) //true
// console.log(arr.includes("strawberry")) //false



// ////////////////  concat() ////////////////
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// let result = arr1.concat(arr2);
// let result1 = arr1.concat(arr2, arr3);
// let result2 = arr1.concat(arr2, 7,8,9);

// console.log(result) //[ 1, 2, 3, 4, 5, 6 ]
// console.log(result1)    //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(result2)    ////[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]




// ////////////////// revere() //////////////////////

let arr = [1,2,3,4,5,6,7];
arr.reverse();
console.log(arr);   //[ 7, 6, 5, 4, 3, 2, 1 ]


