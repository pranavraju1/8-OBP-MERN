// create a function search that takes an array and a target as input, do not use array methods
// your task is to print yes if the element exists in the array and no if it does not
// input -> arr = [1,2,3,4,5], target = 4 
// output -> yes
// input -> arr = [1,2,3,4,5], target = 10 
// output -> no

// function search(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//             return "Yes"
//         }
//     }
//     return "No"
// }
// console.log(search([1,2,3,4,5], 10));


// task1: make countOccurance function that takes an array and target as input
// and returns the number of occurances of that elements

// function countOccurance(arr, target){
//     let count = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//             count++
//         }
//     }
//     if(count == 0){
//         return -1
//     }else{
//         return count
//     }
// }
// console.log(countOccurance([1,2,2,4,5],6))



// task2: make findMax function that takes an array as input
// ans returns the largest element in the array


// function findMax(arr){
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max
// }
// console.log(findMax([1,2,3,4,5]))

// let arr = [1, -2, 15, 2, 0, 8]; 
// arr.sort(function(a, b) {
// //   console.log( a + " <> " + b );
//   return a - b;
// });
// console.log(arr);







