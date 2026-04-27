// let n = 5

// function sum(n){
    
//     let sum = 0;    //this will execute 1 time
    
//     //this will execute 5 times or n times
//     for(let i = 1 ; i <= n; i++){
//         sum += i 
//     }
//     console.log(sum)    //this will execute 1 time
// }
// sum(5);


// total number of operations here is 2 + 5 or 2 + n
// if n is 1000
// total number of operations here is 1000 + 2 = 1002
// if n is 10000000
// total number of operations here is 10000000 + 2 = 10000002

// as the value of n increases the value of 2 will become negligible


// 1 + 2 + 3 .....n = n(n+1)/2

// let n = 5

// function sum(n){
    
//     let sum = 0;
    
//     //this will execute 5 times or n times
//     for(let i = 1 ; i <= n; i++){
//         sum += i 
//     }
//     console.log(sum)   
// }
// sum(1000000);

// linear time complexity
// O(n)



// function optimizedSum(n){

//     // number operations is 1
//     console.log((n*(n+1))/2)

// }
// optimizedSum(1000000)

// constant time complexity
// O(1)


// let count = 0;
// let n = 5;

// function qudratic(){
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             count++;
//         }
//     }
//     console.log(count)
// }
// qudratic(5)  //25 -> 5 x 5 -> n x n -> n^2
// // O(n^2) -> quadratic time complexity



// let count = 0;
// let n = 5;

// function cubic(){
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             for(let k=0; k<n; k++){
//                 count++;
//             }
//         }
//     }
//     console.log(count)
// }
// cubic(5)  //125 
// // O(n^3)


// if the input size reduces as the number of operations increase we can say that 
// the algorithm has the time complexity of O(logn)




// Space Complexity
// 1. constant space complexity O(1)
// if the algo does not need extra memory or the memory does not depend on the input size
// the space complexity is constant eg sorting an array in place w/o using extra arrays
// function multiply(a,b){
//     return a*b
// }
// multiply(2,3)
// O(1);


// 2. Linear Space Complexity O(n)
// the space required grows with the size of input
// function copyArray(arr){
//     const newArr = [];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(arr[i])
//     }
//     return newArr;
// }
// console.log(copyArray([1, 2, 3, 4, 5, 6, 7, 8])) 

// the space complexity here will be O(n)

// what is the space complexity below
// function sumArray(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// the timeComplexity is O(n) and spaceComplexity is O(1)

// HW: create n x m matrix using loops eg [[1,2,3], [4,5,6], [7,8,9]]

// O(logn) -> when the extra space sgrows but not at the same rate 
// eg recursiveBinarySearch




// Best, avg, worst

// function findValue(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//             return true
//         }
//     }
//     return false
// }
// console.log(findValue([1,2,3,4,5], 5))
// if tagert is 1 -> Best case -> O(1)
// if tagert is 6 -> Worst case -> O(n)
// if tagert is 4 -> avg case -> O(n)




// Object
// insertion -> O(1)
// deltion -> O(1)
// access -> O(1)
// Object.keys() -> O(n)
// Object.values() -> O(n)
// Object.entries() -> O(n)
// Searching -> O(n)

// Arrays
// push(), pop() -> O(1)
// access -> O(1)
// Search -> O(n)
// shift(), unshift() -> O(n)
// concat, slice, splice -> O(n)
// forEach, map, filter, reduce -> O(n)

// Note: arr.sort() uses Timsort algo which is a hybrid of merge and insertion sort 
// Best case: O(n) -> if array is already sorted
// Worst case: O(nlogn)




// for(let i=0; i<n; i++){
//     for(let j=0; j<m ;j++){
//         count++
//     }
// }
// O(n*m)


// for(let i=0; i<n; i++){
//     count++
// }
// for(let j=0; j<m; j++){
//     count++
// }
// O(n + m)


// function halfLoop(n){
//     let i = 1;
//     while(i<n){
//         i *= 2
//     }
// }
// O(logn)


function buildString(arr){
    let result = "";
    for(let i=0; i<arr.length; i++){
        result += arr[i];
    }
}
// O(n^2)