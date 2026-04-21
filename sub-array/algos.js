// let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// let max = -Infinity;

// // Brute Force Approach to find the largest sum of a subarray
// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         let sum = 0;
//         for(let k=i; k<=j ;k++){
//             sum += arr[k];
//         }

//         max = Math.max(max, sum);
//     }
// }
// console.log(max)


// let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

// function maxSubarraySum(arr){
//     let maxSoFar = arr[0];  //tracks the maximum sum found so far
//     let maxEndingHere = arr[0]; //tracks the max sum of subarray ending at currrent index

//     // Looping through the array starting form 1
//     for(let i = 1; i<arr.length; i++){

//         // either extend previous subarray or start from current element
//         // take maximum of (current vs previous ending sum + current)
//         // maxEndingHere + arr[i] will always be greater than arr[i] if both are +ve
//         // if arr[i]becomes -ve the sum is less that maxEnding and there is no point in storing that value
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

//         // updating global max if current ending sum is larger
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }
//     return maxSoFar;
// }
// let result = maxSubarraySum(arr)
// // console.log(result)



// // Task find if the traget element exsits in the array 
// // the target is the sum of any 2 elements in the array
// let arr = [2, 6, 5, 8, 11]
// // let target = 10 -> true
// // let target = 20 -> false

// function BruteForceApproach(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]+arr[j] == target){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(BruteForceApproach(arr, 20))



// Two Sum

// function twoSum(arr, target){
 
//     arr.sort(sortArr)
//     function sortArr(a,b){
//         return a-b
//     }
//     // [ -3, -1, 0, 1, 2 ]

//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         let sum = arr[left] + arr[right];

//         if(sum == target){
//             return true
//         }else if(sum < target){
//             left++;
//         }else{
//             right--;
//         }
//     }
//     return false;

// }
// console.log(twoSum([0, -1, 2, -3, 1], -2));




// Sliding Window

// function maxSumSlidingWindow(arr,k){
//     const n = arr.length;
//     if(n<k){
//         return "Invalid k"
//     }

//     let windowSum = 0;
//     // Step1 calculate the sum of 1st subarray
//     for(let i=0; i<k; i++){
//         windowSum += arr[i]
//     }
//     let maxSum = windowSum;


//     // sliding logic
//     // Slide the window from start to end of the array
//     // ie the previous element arr[i-k] is removed from the windowSum and next element arr[i] is added
//     for(let i=k; i<n; i++){
//         windowSum += arr[i] - arr[i - k];
//         maxSum = Math.max(maxSum, windowSum);
//     }
//     return maxSum;
// }
// console.log(maxSumSlidingWindow([5, 2, -1, 0, 3],3))



// find all posible palindromes in the below strings
// input -> "racecar"
// output -> ["aceca", "racecar", "cec"]



