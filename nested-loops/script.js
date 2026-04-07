// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// let count = 0
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         count++;
//     }
// }
// console.log(count) // 9
// if outer loop is running n number of times and inner loop is running m number of times
// then the whole nested loop runs n*m number of times

// task1
// print tables from 1 to 5
// 1 x 1  = 1
// 1 x 2  = 2
// 1 x 3  = 3
// 1 x 4  = 4
// 1 x 5  = 5
// 1 x 6  = 6
// 1 x 7  = 7
// 1 x 8  = 8
// 1 x 9  = 9
// 1 x 10 = 10
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// .
// .
// .

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=10; j++){
//         console.log(`${i} X ${j} = ${i*j}`)
//     }
// }

// print the below pattern
//  # # # #
//  # # # #
//  # # # #
//  # # # #


// let l = 4
// let b = 10
// for(let i=0; i<l; i++){
//     // let row = "# # # #"
//     let row = ""
//     for(let j=0; j<b; j++){
//         row += "# "
//     }
//     console.log(row);
// }


// for(let i=0; i<4; i++){
//     let row = "";
//     for(let j=0; j<4; j++){
//         row += `${i}${j} `
//     }
//     console.log(row)
// }


// const arr = [5, 10, 11];
// arr.push(5);
// console.log(arr)




// print the below pattern using nested while loop
//  # # # #
//  # # # #
//  # # # #
//  # # # #

// let i=0;
// while(i<4){
//     let j=0;
//     let row = ""
//     while(j<4){
//         row += "# "
//         j++;
//     }
//     console.log(row)
//     i++;
// }




// *
// * * 
// * * *
// * * * *
// * * * * *

// for(let i=0; i<4 ;i++){
//     let row = ""
//     for(let j=0; j<=i; j++){
//         row += "* "
//     }
//     console.log(row)
// }



// * * * * *
// * * * *
// * * * 
// * * 
// *

// for(let i=0 ; i<5; i++){
//     let row = ""
//     for(let j=i; j<5; j++){
//         row += "* "
//     }
//     console.log(row)
// }



// A
// AB
// ABC
// ABCD
// ABCDE


// for(let i=0; i< 5; i++){
//     let row = "";
//     for(let j=0; j<=i; j++){
//         // row += `${65 +  j}` 
//         row += String.fromCharCode(65 + j) 
//     }
//     console.log(row);
// }



