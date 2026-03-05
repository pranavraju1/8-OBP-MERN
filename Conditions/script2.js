// let age = 2;

// syntax
// if(condition){
//     block code
// }

// if(age >=18){
//     console.log("You can vote")
// }

// this is also another way to write if statement but not recomended
// please use the below if you only want to execute a single line of block code
// if(age >=18) console.log("You can vote")

// ***********************************************
// else
// let age = 22;

// if the codition is true the if block gets executed and if the condition 
// is false the else block gets executed
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// ***********************************************


// else if/

// question which year did india get its independece
// let year = 2000;

// if(year > 1947){
//     console.log("Year you have entered is greater")
// }else if(year < 1947){
//     console.log("Year you have entered is less")
// }else{
//     console.log("You are right")
// }


//******************************* */
// truhy/flasy values


// let a = undefined
// if(a){
//     console.log("this is a truthy value")
// }else{
//     console.log("this is a falsy value")
// }

//******************************* */
// nested if statements
// let age;

// if (age) {
//   console.log("user has entered valid input");
//     if (age >= 18) {
//         console.log("you can vote");
//     } else {
//         console.log("you cannot vote");
//     }
// } else {
//   console.log("user has not enterred valid input");
// }

// ***************************************

// let age = 2
// if (age >= 18) {
//     console.log("you can vote");
// } else {
//     console.log("you cannot vote");
// }

// age >= 18 ? console.log("you can vote") : console.log("you cannot vote")

// syntax 
// let result = condition ? value1 : value2
// let message = (age >= 18) ? "you can vote" : "you cannot vote";
// console.log(message);




// if (age) {
//     if (age >= 18) {
//         console.log("you can vote");
//     } else {
//         console.log("you cannot vote");
//     }
// } else {
//   console.log("user has not enterred valid input");
// }

// let age;

// let message = (age) ? (age >= 18) ? "you can vote" : "you cannot vote" : "user has not enterred valid input"
// console.log(message)


// let score = 65;

// if(score >= 90){
//     console.log("Grade A")
// }else if(score >= 80){
//     console.log("Grade B")
// }else if(score >= 70){
//     console.log("Grade C")
// }else if(score >= 60){
//     console.log("Grade D")
// }else{
//     console.log("Grade F")
// }


// let message =
//   score >= 90
//     ? "Grade A"
//     : score >= 80
//       ? "Grade B"
//       : score >= 70
//         ? "Grade C"
//         : score >= 60
//           ? "Grade D"
//           : "Grade F";



// let age = 2
// let message2 = (age >= 18) ? "You can vote" : ""
// let message2 = (age >= 18) ? "You can vote" : null
// console.log(message2)

