// ************************recap**************
// let a = 4
// let b = 4
// if(a < b){
//     console.log("a is less than b")
// }else if(a == b){
//     console.log("a is equal to b")
// }else{
//     console.log("a is greater to b")
// }


// let age = 18;
// let isCouple = false

// if(age > 18){
//     if(isCouple){
//         console.log("entry is free")
//     }else{
//         console.log("charge is 2000")

//     }

// }else{
//     console.log("you cannot enter")
// }
// ************************recap**************

// *******************questions****************

//Q1. you are given a number n and you have to print if it is positive, negetive or zero

// let n = 5;
// if(n>0){
//     console.log("positive")
// }else if(n<0){
//     console.log("negetive")
// }else{
//     console.log("zero")
// }

// let result = (n>0) ? "positive" : (n<0) ? "negetive" : "zero";
// console.log(result)

// Q2. you are given a number can be in decimals -> check if the integer part is odd or even 

// let n = 5.34
// n = Math.floor(n);
// if(n%2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// let result = (n%2 == 0) ? "even" : "odd"


// q3 you are given 3 numbers a,b,c now you have to print which one is the greatest 
// eg: if a is greater than b and c print a is the largest

// let a = 1;
// let b = 4;
// let c = 3;

// // approach1
if(a>b){
    if(a>c){
        console.log("a is the largest")
    }else{
        console.log("c is the largest")
    }
}else{
    if(b>c){
        console.log("b is the largest")
    }else{
        console.log("c is the largest")
    }
}







// approach2
if(a>b){
    if(a>c){
        console.log("a is largest")
    }
}

if(b>a){
    if(b>c){
        console.log("b is largest")
    }
}

if(c>a){
    if(c>b){
        console.log("c is largest")
    }
}










// *******************questions****************



