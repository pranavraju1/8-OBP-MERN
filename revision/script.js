// // let arr = [1,2,3,4, "apple", {name: "pranav"}, [6,4,3,2]]

// // arr.flat() creates a new array with nested array flattened up to the depth
// // provided. If no depth is given it flattens one level by default
// let arr = [1, 2, [3, 4]];
// console.log(arr.flat()) //[ 1, 2, 3, 4 ]

// let arr1 = [1, [2, [3, [4]]]];

// console.log(arr1.flat())    //[ 1, 2, [ 3, [ 4 ] ] ]
// console.log(arr1.flat(3))   //[ 1, 2, 3, 4 ]

// // to flatten the while array if you dont know the depth
// console.log(arr1.flat(Infinity))    // //[ 1, 2, 3, 4 ]




////////////////////////  const array and objects ///////////////////

// const b = 4
// b = 5;
// // we cannot reassign const variables

// const arr = [1,2,3,4];
// arr = [5,6,7]; 
// console.log(arr);


// with const, the variable cannot be reassigned, but the contents of existing
// array or object can still be changed.
// this is bc const protects the binding and not the data.
// const arr = [1,2,3,4];
// arr[0] = 5;
// arr.push(6)
// console.log(arr); //[ 5, 2, 3, 4 ]

// const obj = {name: "kiran"};
// obj.age = 20;
// console.log(obj)





// func()
// console.log(1)
// // var func = function(){
// //     console.log("func is running")
// // }
// function func(){
//     console.log("func is running")
// }
// console.log(2)




// Q1
//Write a function that takes:
//totalFoodCost, discountPercent, tipPercent. as input
// it returns an object {discountedTotal, tipAmount , finalTotal}
// hint:
// discountedTotal is the discount applied on the total amount
//  tipPercent is applied on discountedTotal

// input -> calculateBill(200, 10, 15);
// output -> {
//     discountedTotal: 180,
//     tipAmount: 27,
//     finalTotal: 207.
// }


// Q2
// Write a function fizzBuzzRange(start, end) that prints numbers from start to end, but 
// replace multiples of 3 with "Fizz", 5 with "Buzz", both with "FizzBuzz".
// input -> fizzBuzzRange(10,20)
// output -> Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz 


// Q3 
// longestWord(["cat", "elephant", "dog", "butterfly"])

// q4
// mergeWithoutDuplicates([1, 2, 3], [2, 3, 4])
// // should return: [1, 2, 3, 4]

// q5
// removeVowels("Hello World")
// should return: "Hll Wrld"