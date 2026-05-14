
// function doubleEachElement(arr){
    //     let result = []
    //     for(let i=0; i<arr.length; i++){
        //         result.push(arr[i] * 2)
        //     }
        //     return result
        // }
        
        // let value = doubleEachElement(arr);
        // console.log(value)
        
// let arr = [1, 2, 3, 4, 5];

// let result =  arr.map((item, idx) => {
//     if(idx %2 == 0)return "hello"
// })

// console.log(result)


// map() is used when you want to create a new array by using the values of the original array
// 1. it does not effect the original array
// 2. it always returns a new array
// 3. the output length is usually the same as the input length


// ex1
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(item => item * 2);

// console.log(numbers)        // the original array is not effected
// console.log(doubled)       //[ 2, 4, 6, 8, 10 ] 

// ex 2: transform each element to capital words
// const names = ["rahul", "anita", "meena"];

// const capitalNames = names.map((item) => item.toUpperCase());

// console.log(capitalNames)

// ex 3: add $ sign in front of the prices
// input -> [100, 200, 300]
// output -> ["$100", "$200", "$300"]

// let prices = [100, 200, 300]
// let $prices = prices.map((price) => `$${price}`);
// console.log($prices)


// ex4: 50 above is pass and below is fail
// const students = [
//     {name: "Anita", marks: 78},
//     {name: "Ravi", marks: 45},
//     {name: "Meena", marks: 92}
// ]

// op ->
// [
//       {studentName: "Anita", result: "Pass"},
//       {studentName: "Anita", result: "Fail"},
//       {studentName: "Anita", result: "Pass"},
// ]

// let result = students.map((item)=>{
//     if(item.marks > 50){
//         return  {studentName: item.name, result: "Pass"}
//     }else{
//         return  {studentName: item.name, result: "Fail"}
//     }
// })
// console.log(result)



// let result = students.map((item)=>{
//     return {
//         studentName: item.name,
//         result: item.marks > 50 ? "Pass" : "Fail"
//     }
// })
// console.log(result)


///////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6];

// let evenElements = arr.filter((item) => {
//     if(item%2 == 0){
//         return true;
//     }
// });
// console.log(evenElements);

// filter() is used when you want to keep only that elements that satisfy the condition
// 1. it returns a new array
// 2. the o/p may have fewer or the same number of elements
// 3. it does not transform the value, only choses which one stays

// ex1: give me list of all elements above 50
// let arr = [50, 30, 40, 60, 80, 90];

// let result =  arr.filter((item) => item > 50 )

// console.log(result)

// ex2: give me list of active user objects
// const users = [
//     {name: "Asha", isActive: true},
//     {name: "Ravi", isActive: false},
//     {name: "Kiran", isActive: true},
// ]

// let activeUserObj = users.filter((item)=> item.isActive)
// let activeUserName = activeUserObj.map((item) => item.name)

// OR

// let activeUserName = users.filter((item)=> item.isActive).map((item) => item.name)



// console.log(activeUserName)

// apply search filter
// lets say user give input ap
// the filterd list should contain ["apple", "apricot", "grape"]
// const items = ["apple", "banana", "apricot", "orange", "grape"];
// const useInput = "a"
// const filteredItems = items.filter((item) => item.includes(useInput) )
// console.log(filteredItems)



// Reduce
// let arr = [1, 2, 3, 4, 5];
// function sum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum
// }

// console.log(sum(arr));

let arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, current) => {
//     console.log("current", current)     //current has single values of the array
//     console.log("acc", acc)             //acc (accumulator) holds the acumulated or sum value
//    return acc + current
// } , 10 );
// console.log(result) //15

// reduce() -> it is used when you want to combine all array elements into a single array
// Note: if acc value is not initialized it by default will take the 1st value of the array ie. arr[0]


// const result = arr.reduce((acc, current) => acc * current , 1)  //120

// task find total price using reduce
// const cart = [
//     {item: "shirt", price: 700},
//     {item: "jeans", price: 1500},
//     {item: "shoes", price: 2500},
// ]

// let result = cart.reduce((acc, current) => acc + current.price, 0)
// console.log(result)


let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
// otp -> {"apple": 3, "banana": 2, "orange": 1}
// taks find frequency

// let result = {}
// for(let i=0; i<fruits.length; i++){
//     let word = fruits[i];

//     // if(result[word]){
//     //     result[word]++
//     // }else{
//     //     result[word] = 1
//     // }

//     // or
//     result[word] = (result[word] || 0) + 1
// }

// console.log(result)

// const result = fruits.reduce((acc, current)  => {
//     acc[current] = (acc[current] || 0) + 1
//     return acc
// }, {});

// console.log(result)



const words = ["Hi", "Pranav", "this", "side"];
// op -> "Hi Pranav this side" 
// dont use join method, solve it using reduce

