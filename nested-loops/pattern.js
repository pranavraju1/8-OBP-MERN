// task1: make a n x n square using "*"
// * * * *
// * * * *
// * * * *
// * * * *

// taks2: right angle triangle n = 4
// *
// * *
// * * *
// * * * *

// taks3: right angle triangle n = 4
// * * * *
// * * *
// * *
// *

// taks4: right angle triangle n = 4
//       *
//     * *
//   * * *
// * * * *

// let n=5;
// for(let row = 1; row<=n; row++){
//     let line = "";
//     // below will run: 4 , 3, 2 , 1, 0
//     for(let space = 1; space<=n-row; space++){
//         line += " "
//     }

//     // below loop will run: 1, 2, 3, 4, 5
//     for(let star = 1; star<=row; star++){
//         line += "*"
//     }
//     console.log(line);
// }

// task5: pyramid
//      *
//    * * *
//  * * * * *
//* * * * * * *
// let n=4;
// for(let row = 1; row<=n; row++){
//     let line = "";
//     // below will run: 4 , 3, 2 , 1, 0
//     for(let space = 1; space<=n-row; space++){
//         line += " "
//     }

//     // below loop will run: 1, 2, 3, 4, 5
//     for(let star = 1; star<=row; star++){
//         line += "* "
//     }
//     console.log(line);
// }

// method 2
// let n=4;
// for(let row = 1; row<= n; row++){
//     let line = "";
//     for(let space = 1; space<=n-row; space++){
//         line += " ";
//     }
//     // below loop will run 1, 3, 5, 7
//     for(let star = 1; star <= 2*row -1; star++){
//         line += "*"
//     }
//     console.log(line)
// }




// task 6: hollow pyramid
//     *
//    * *
//   *   *
//  *     *

// let n=4;
// for(let row = 1; row<= n; row++){
//     let line = "";
//     for(let space = 1; space<=n-row; space++){
//         line += " ";
//     }
//     // below loop will run 1, 3, 5, 7
//     for(let star = 1; star <= 2*row -1; star++){
//         if(star == 1 || star == 2*row -1){
//             line += "*"
//         }else{
//             line += " "
//         }
//     }
//     console.log(line)
// }












// task 7: star
//     *
//    *** 
//   *****
//  *******
//   *****
//    *** 
//     *


