
// let a = true;
// let b = true;
// let result = a || b;
// console.log(result)



// console.log(true || true)   //true
// console.log(true || false)   //true
// console.log(false || true)   //true
// console.log(false || false)   //false

// if(0 || 0){
//     console.log("truthy")
// }else{
//     console.log("falsy")
// }

// let hour = 11;
// let isWeekend = false
// if(hour<10 || hour>18 || isWeekend){
//     console.log("The office is closed")
// }

// let a = 0;
// let b = 0;
// let c = false;

// let result = b || a || c;

// console.log(result)


// console.log(1 || 0)
// console.log(null || 2)
// console.log(null || 0 || 1)
// console.log(undefined || null || false)


// let firstName = "";
// let lastName = "";
// let userName = "";

// let result = firstName || lastName || userName || 'Anonymus'
// console.log(result)


// first line will not execute but the second will
// true || console.log("hello");
// false || console.log("hello2");


// *****************AND ********************


// console.log(true && true)  //true
// console.log(true && false)  //false
// console.log(false && true)   //false
// console.log(false && false)   //false


// let age = 20
// let isFemale = true;

// using if
// if(age > 18){
//     if(isFemale){
//         console.log("its a felmale adult")
//     }
// }

// using and operator
// if(age > 18 && isFemale){
//         console.log("its a felmale adult")

// }

// if(a>b){
//     if(a>c){
//         console.log("a is largest")
//     }
// }

// if(b>a){
//     if(b>c){
//         console.log("b is largest")
//     }
// }

// if(c>a){
//     if(c>b){
//         console.log("c is largest")
//     }
// }

// if(a>b && a>c){
//     console.log("a is largest")
// }
// if(b>a && b>c){
//     console.log("b is largest")
// }
// if(c>a && c>b){
//     console.log("c is largest")
// }


// let a;
// let b;
// let c;

// let result = a && b && c && "abcd"
// console.log(result)
// undefined
// "abcd"


// console.log(1 && 0)
// console.log(1 && 5)
// console.log(null && 5)
// console.log(0 && "hello")
// console.log(1 && 2 && null && 3)


// let isFemale = true;
// isFemale = !isFemale;
// console.log(isFemale)

// console.log(!true)  //flase
// // it first converts it into boolean and then reverses the value
// console.log(!0) //true
// console.log(!3) //false

// boolean coversion
// console.log(Boolean(0))

