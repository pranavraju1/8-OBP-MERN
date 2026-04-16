// for n = 4 

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// let n = 4;
// let line = ""
// // for upper pyramid
// for(let i = 1; i <=n; i++){
//     for(let j = 1; j <=n-i; j++){
//         line += " "
//     }
//     for(let k = 1; k <= 2*i-1 ; k++){
//         line += "*"
//     }
//     line += "\n"
// }
// // lower pyramid
// for(let i = n-1; i >= 1; i--){
//     for(let j=1; j<= n-i; j++){
//         line += " ";
//     }
//     for(let k=1; k <= 2*i-1; k++){
//         line += "*"
//     }
//     line += "\n"
// }
// console.log(line)










// task 2
// for n=4
// ****
// *  *
// *  *
// ****

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let line = "";
//     for(let j = 1; j <= n; j++){
//         if(i == 1 || i == n || j == 1 || j == n){
//             line += "*";
//         }else{
//             line += " ";
//         }
//     }
//     console.log(line)
// }
