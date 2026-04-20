// task1: 
// find the largest element in a 2 D matrix
// input ->
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// output -> 9
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// let max = arr[0][0]
// for(let i=0;i<arr.length;i++){
//     for(let j=0; j<arr.length;j++){
//         if(arr[i][j]>max){
//             max = arr[i][j]
//         }
//     }
// }
// console.log(max)




// let arr = 
// [
    //     [1,1,1,1],
    //     [1,1,1,1],
    //     [1,1,1,1],
    // ]
    
    // // 3 X 4
// // length = arr[0].length
// // width = arr.length


//task2 find the transpose of a matrix
// input ->
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// output ->
// [
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
// ]

// let arr = 
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// let tras = [];
// for(let i=0; i<arr[0].length;i++){
//     let innerArr = []
//     for(let j=0; j<arr.length; j++){
//         innerArr.push(arr[j][i])
//     }
//     tras.push(innerArr)
// }
// console.log(tras)




// task3:
// do a snake like traversal of a matrix
// input ->
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// output -> 1 2 3 6 5 4 7 8 9

// let arr =  [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// for(i=0; i<arr.length; i++){
//     if(i%2==0){
//         for(let j=0;j<arr.length;j++){
//             console.log(arr[i][j])
//         }
//     }else{
//         for(let j=arr.length-1; j>=0; j--){
//             console.log(arr[i][j])
//         }
//     }
// }


// task 4: spiral traversal of a matrix
// input ->
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// output -> [1,2,3,6,9,8,7,4,5]


let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let top = 0;    //1st row index
let bottom = arr.length -1; //last row index
let left = 0;   //first column index
let right = arr[0].length -1;   //last column index


let result = [];

while(top <= bottom && left <= right){

    // left to right (top is fixed)
    for(let i=left ;i<=right ;i++){
        result.push(arr[top][i])
    }
    top++;  //next row

    // top to bottom (right is fixed)
    for(let i=top; i<=bottom; i++){
        result.push(arr[i][right])
    }
    right--; //previous column

    // right to left (bottom is fixed)
    for(let i=right; i>=left; i--){
        result.push(arr[bottom][i])
    }
    bottom--; //previous row

    // bottom to top (left is fixed)
    for(let i=bottom; i>=top; i--){
        result.push(arr[i][left])
    }
    left++ //next column
}
console.log(result)