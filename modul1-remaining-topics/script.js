// function sum(a, b){
//     return a + b
// }
// console.log(sum(1, 2, 3, 4, 5, 6)); //3

// Rest operators
// function sumAll(...args){
//     let sum = 0;
//     // console.log(args)   //[ 1, 2, 3, 4, 5, 6 ]

//     for(let arg of args){
//         sum += arg
//     }

//     return sum;
// }
// console.log(sumAll(1, 2, 3, 4, 5, 6)); //21



// function sumAll(a, b, ...args){
//     let sum = 0;
//     console.log(a)  //1
//     console.log(b)  //2
//     console.log(args)   //[ 3, 4, 5, 6 ]


//     return sum;
// }
// console.log(sumAll(1, 2, 3, 4, 5, 6)); 
// //Note: '...' A rest parameter must be last in a parameter list.

///////////////////////////////////////////////////
// Rest operator


// console.log(Math.max(3, 2, 5, 6, 1)) //6

// let arr = [3, 2, 5, 6, 1];

// console.log(Math.max(arr));  //NaN
// console.log(Math.max(...arr));  //6

// let arr1 = [3, 2];
// let arr2 = [5, 6, 1];

// let arr3 = [...arr1 , ...arr2]; //merging an array

// console.log(arr3)   //[ 3, 2, 5, 6, 1 ]

// console.log(Math.max(...arr1 , ...arr2));   //6

// let arr4 =  [...arr1, 0, ...arr2, 0];
// console.log(arr4)   //[ 3, 2, 0, 5, 6, 1, 0 ]


// let str = "Hello";
// console.log([...str])   //[ 'H', 'e', 'l', 'l', 'o' ]



///////////////// spread operator in objects ////////////

// let student = {name: "Riya", marks: 85};
// let obj = {...student};
// console.log(obj) //{name: "Riya", marks: 85};

// let obj1 = {...student, gender:"Female"};
// console.log(obj1) //{ name: 'Riya', marks: 85, gender: 'Female' }

// // you can update object properties using spread operators
// let obj2 = {...student,  marks: 100};
// let obj2 = {...student,  marks: 100};
// console.log(obj2)   //{ name: 'Riya', marks: 100 }



///////////////////////////// shalow copy ///////////////////////


// let obj = {
//     a:'a', 
//     b: "b", 
//     c:{ 
//         see: "c" 
//     }
// }

// let obj2 = {...obj}; // shallow copy
// // obj2.a = "A"
// // console.log(obj)    //{ a: 'a', b: 'b', c: { see: 'c' } }
// // console.log(obj2)  //{ a: 'A', b: 'b', c: { see: 'c' } }


// obj2.c.see = "C"
// console.log(obj)    //{ a: 'a', b: 'b', c: { see: 'C' } }
// console.log(obj2)   //{ a: 'a', b: 'b', c: { see: 'C' } }

// // use spread operator to make copy only when the obj/array and not complex



// let obj = {
//     a:'a', 
//     b: "b", 
//     c:{ 
//         see: "c" 
//     }
// }

// // mehthod 1 of making deep copy
// // let obj2 = JSON.parse(JSON.stringify(obj))
// // obj2.c.see = "C"
// // console.log(obj)    //{ a: 'a', b: 'b', c: { see: 'c' } }
// // console.log(obj2)   //{ a: 'a', b: 'b', c: { see: 'C' } }

// // method 2
// let obj3 = structuredClone(obj);
// obj3.c.see = "C"
// console.log(obj)    //{ a: 'a', b: 'b', c: { see: 'c' } }
// console.log(obj3)   ////{ a: 'a', b: 'b', c: { see: 'C' } }

// // Note: JSON.parse(JSON.stringify(obj)) does not preserve all datatypes correctly thats why
// // its more ideal to use structuredClone()




/////////////////////////////// Destructuring array and objects /////////////////////

// let fruits = ["apple", "banana", "mango"];

// let [first, second, third] = fruits;

// console.log(first)  //"apple"
// console.log(second) //"banana"
// console.log(third)  //"mango"


// let nums = [10, 20, 30, 40, 50]
// let [a, , c] = nums
// console.log(a)  //10
// // console.log(b)
// console.log(c)  //30


// let nums2 = [1, 2 , 3 , 4 , 5]
// let [first, second, ...remaining] = nums2;
// console.log(first)  //1
// console.log(second)   //2
// console.log(remaining)  //[ 3, 4, 5 ]
// // Note in the above example we have used rest opeartor as it is applied on multiple values


// object destructuring
let student = {
    name: "Arjun",
    age: 21,
    course: "JS"
}
// let {name, age} = student
// console.log(name) //Arjun
// console.log(age)    //21

// let {name:studentName, age: studentAge} = student
// console.log(studentName)    //Arjun
// console.log(studentAge) //21


let employee = {
    id: 101,
    address: {
        city: "Pune",
        state: "Maharastra"
    }
}

let { address: {city, state}} = employee;
console.log(city)   //Pune
console.log(state)  //Maharastra
console.log(address) //undefined