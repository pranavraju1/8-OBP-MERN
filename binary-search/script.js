// linear Serach O(n)
// let arr = [1,2,3,4,5,6];
// let target = 6
// function linearSearch(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(target == arr[i]){
//             return true
//         }
//     }
//     return false;
// }
// console.log(linearSearch(arr, target));


// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){

//         let mid = Math.floor((left + right)/2);
        
//         if(arr[mid] == target){
//             return true;
//         }else if(arr[mid] < target){
//             left = mid + 1;     //target is on the right side of the array
//         }else{
//             right = mid - 1;    //target is on the left side of the array
//         }
//     }

//     return false
// }

// console.log(binarySearch(arr, target))



// let arr = [1, 2, 5, 5, 5, 6, 7] 
// let target = 5
// // find the first occurace of the target -> return the index

// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;
//     while(left <= right){

//         let mid = Math.floor((left + right)/2);
        
//         if(arr[mid] == target){
//             result = mid //storing the value of the index
//             right = mid - 1 //checking on the left side

//         }else if(arr[mid] < target){
//             left = mid + 1;    
//         }else{
//             right = mid - 1;    
//         }
//     }

//     return result
// }

// console.log(binarySearch(arr, target))


// // if the target is not present find the left most index where it should be inserted in the array
// let arr = [1,2,3,5,6,7]
// let target = 4 
// // output -> 3

function lowerBound(arr, target){
    let left = 0;
    let right = arr.length-1;
    let result = arr.length;

    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(arr[mid] >= target){
            result = mid;
            right = mid -1;
        }else{
            left = mid +1;
        }
    }
    return result
}
console.log(lowerBound([1,2,3,5], 4));
