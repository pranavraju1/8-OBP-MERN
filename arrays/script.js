// let mark1 = 30
// let mark2 = 40
// let mark3 = 50
// let mark4 = 80
// let mark5 = 100
// let mark6 = 50
// let mark7 = 80


// litral syntax of an array
// let arr = [30, 40, 50, 80, 100, 50, 80];

// this is an empty arr
// let emptyArr = [];

// array of strings
// let stringArr = ["a", "b", "c", "d", "e", "f"];

// array of mixed values
// let mixArr = [1 , "a" , 2 , "b" , 3 , "c"]


// accessing single values from an array
// let arr = [30, 40, 50, 80, 100, 50, 80];
// index= [0,   1,  2,  3,   4,  5,   6];

// console.log(arr[1]) // 40
// console.log(arr[6]) // 80

// index does not exist
// console.log(arr[7]) // undefined
// console.log(arr[-1]) //undefined

// you also modify values by accesing them
// arr[0] = 10;

// let arr = [30, 40, 50, 80, 100, 50, 80];
// index= [0,   1,  2,  3,   4,  5,   6];
// arr[6] = 10;

//you can also add elements in an array at the end
// but this is not recomended 
// arr[7] = 70;
// arr[15] = 100;
// console.log(arr);


// length of an array
// let arr = [30, 20, 10, 40];
// index= [0,  1,  2,  3]
// console.log(arr.length) // 4

// console.log(arr[3])
// this is a way in which you can access the last elelement of an array
// console.log(arr[arr.length - 1]) //40

// console.log(arr[arr.length]) //undefined

// let arr = [30, 20, 10, 40];
// index= [0,  1,  2,  3]

// arr.length = 1;
// console.log(arr); // 30

// arr.length = 3;
// console.log(arr); // [ 30, 20, 10 ]

// arr.length = 10;
// console.log(arr) //[ 30, 20, 10, 40, <6 empty items> ]


// let arr = [1,3,4,5,6,7,8, ............. , 189, 190, 200]
// how can i target the second last element in the above array
// clg(arr[arr.length-1]) -> 200
// clg(arr[arr.length-2]) -> 200




// let arr = [30, 20, 10, 40];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])




// let arr = [30, 20, 10, 40];
// for loop
// for(let i = 0; i < arr.length ; i++){
//     console.log(arr[i])
// }


// for of loop
// let arr = ['Apple', 'Banana' ,'Mango' ,'Kiwi'];
// for(let fruit of arr ){
//     console.log(fruit)
// }

// for in loop -> index values
// let arr = ['Apple', 'Banana' ,'Mango' ,'Kiwi'];
// for(let fruit in arr ){
//     console.log(fruit)  //0 1 2 3
// }


// let arr = ['Apple', 'Banana' ,'Mango' ,'Kiwi'];
// for(let index in arr ){
//     console.log(arr[index])  
// }
// task: i want to see the values in the array using for in loop


// let arr = [1, 2, 3, 4, 5, 6]
// ṭask: multiply each element by 6
// for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i] * 6
// }
// console.log(arr)

// ṭask2: print the elements in reverse
// for(let i= arr.length-1 ; i>=0; i--){
//     console.log(arr[i])
// }


// task3: sum of all the elements in the array
// let arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;

// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
// }
// console.log(sum)