// [1,2,3]

// [1,2,3], [1,2], [2,3], [1], [2], [3]

// let arr = [1,2,3,4,5]

// for(let i=0; i<arr.length; i++){
//     let sub = [];
//     for(let j=i; j<arr.length; j++){
//         sub.push(arr[j]);
//         console.log(sub);
//     }
// }

// OR

// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         console.log(arr.slice(i, j+1));
//     }
// }


//given a target element dind if the the sum of subarrays gives that target
// input -> function hasSubarraySum([1,2,3,4,5], 5)
// output -> true

// function hasSubarraySum(arr, target){
//     for(let i=0; i<arr.length; i++){
//         let sum = 0;
//         for(let j=i; j<arr.length; j++){
//             sum += arr[j];
//             if(sum == target){
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(hasSubarraySum([1,2,3,4,5], 15))






// kadence algo used to calculate the maximum sum of a subarray

// [-2, -3, 4, -1, -2, 1, 5, -3] here the max sum will be 7 -> [4, -1, -2, 1, 5] 

let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

function maxSubarraySum(arr){
    let maxSoFar = arr[0];  //tracks the maximum sum found so far
    let maxEndingHere = arr[0]; //tracks the max sum of subarray ending at currrent index

    // Looping through the array starting form 1
    for(let i = 1; i<arr.length; i++){

        // either extend previous subarray or start from current element
        // take maximum of (current vs previous ending sum + current)
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // updating global max if current ending sum is larger
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
let result = maxSubarraySum(arr)
// console.log(result)



