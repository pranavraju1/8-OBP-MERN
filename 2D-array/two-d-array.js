// let arr = [1,{name: "pranav"}]
// console.log(arr[1].name) //"pranav"

// let arr = [1, ["pranav", "raju"]]
// console.log(arr[1][1])  //"raju"


// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(arr[0][0])  //1
// console.log(arr[0][1])  //2
// console.log(arr[0][2])  //3

// console.log(arr[1][0])  //4
// console.log(arr[1][1])  //5
// console.log(arr[1][2])  //6


// console.log(arr[2][0])  //7
// console.log(arr[2][1])  //8
// console.log(arr[2][2])  //9


// task below is the given array insert elements into it so the the result looks like arr2
// you are not allowed to hard code
// let arr = [];
// arr2 = [[1,2,3], [4,5,6], [7,8,9]];

// let arr = [];
// let count = 0;

// for(let i = 0 ;i < 4; i++){
//     let innerArr = [];
//     for(let j = 0; j < 3; j++){
//         count++;
//         innerArr.push(count);
//     }
//     arr.push(innerArr)
// }
// console.log(arr)        //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// console.table(arr)        //to see in table format



// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// tasks1: print the elements row wise : 1,2,3,4,5,6,7,8,9
// tasks2: print the elements column wise : 1,4,7,2,5,8,3,6,9
// tasks3: print the daigonal elements of the sqaure matrix: 1,3,5,7,9
// tasks4: print the non daigonal elements of the square matrix: 2,4,6,8
// tasks5: find the center element of the square matrix: 5

// // row wise
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(arr[i][j])
//     }
// }

// col wise
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(arr[j][i])
//     }
// }

// daigonal elements
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j || i+j == 2){
//             console.log(arr[i][j])
//         }
//     }
// }

// non daigonal elements
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j || i+j == 2){
//             continue;
//         }else{
//             console.log(arr[i][j])
//         }
//     }
// }

// center element
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j && i+j == 2){
//             console.log(arr[i][j])
//         }
//     }
// }
