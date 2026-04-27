// // cons/disadvantages of obj
// // the properties in obj are not ordered
// // we cannot directly traverse an object
// // keys in obj are of 2 data types symbol and string we cannot have anyother datatype

// // let obj = {
// //     name: "pranav",
// //     age: 20,
// //     "city": "pune",
// // }


// // Map
// // A map is a built in collection of key value pairs but unlike objects keys here
// // can be of any data type. Map also preserves the insertion order when iterated.

// // new key is used to create blueprints
// let map = new Map(); //this is how you create a Map

// // .set(key, value) is used insert values inside map
// map.set("name", "Pranav");
// map.set("age", 20);
// map.set("name", "Raju");

// // .ḥas(key) checks if that particular key exists or not
// console.log(map.has("name"))    //true
// console.log(map.has("city"))    //false

// // .get(key) lets you access the value
// console.log(map.get("age"))     //20
// console.log(map.get("name"))    //Pranav

// //.size gives you the length of your map
// console.log(map.size)   //2

// map.set("temp", "temp value");  // { 'name' => 'Raju', 'age' => 20, 'temp' => 'temp value' }
// // .delete(key) allows you to remove a value
// // it also returns true if deletion has happend and false if the key does not exists
// map.delete("temp")  // { 'name' => 'Raju', 'age' => 20 }

// // used to clear your map
// map.clear();


// const userMap = new Map();
// const user1 = {id: 1, name: "Aman"};
// const user2 = {id: 2, name: "Sara"};

// userMap.set(user1, "Frontend Student");
// userMap.set(user2, "Backend Student");
// userMap.set(101, "Batch A");
// userMap.set(true, "Active Batch");

// console.log(userMap)
// // Map(4) {
// //   { id: 1, name: 'Aman' } => 'Frontend Student',
// //   { id: 2, name: 'Sara' } => 'Backend Student',
// //   101 => 'Batch A',
// //   true => 'Active Batch'
// // }

// console.log(userMap.get(user1)) //Frontend Student
// console.log(userMap.get(101)) //Batch A
// console.log(userMap.get(true)) //Active Batch


// task count the frequency in map
// const words = ['js', 'react', 'js' ,'node', 'react', 'js'];

// const freqMap = new Map();

// for(word of words){
//     freqMap.set(word, (freqMap.get(word) || 0)+ 1)
// }

// console.log(freqMap)    // { 'js' => 3, 'react' => 2, 'node' => 1 }



// // this is another way of creating your map, where the key value pairs are in an array
// // [ ['pen', 20], ['notebook', 10], ['market', 5],]
// const inventory = new Map([
//     ['pen', 20],
//     ['notebook', 10],
//     ['market', 5],
// ]);


// // for(const item of inventory){
// //     console.log(item)
// // }
// // [ 'pen', 20 ]
// // [ 'notebook', 10 ]
// // [ 'market', 5 ]

// // remember to destructure your array inside your for of loop
// for(const [key, value] of inventory){
//     console.log(key, value)
// }
// // pen 20
// // notebook 10
// // market 5



// Set
// its a built in collection that stores only unique values, meaning duplicates are ignored.
// it also preserves the insertion order during iteration.

// const set = new Set();

// // .add(item) adds the item inside set, if the item already exists it will ignore that item
// set.add(10);
// set.add(20);
// set.add(10);
// set.add(30);
// console.log(set)    //{ 10, 20, 30 }


// // .has(item) checks if that item exists or not
// console.log(set.has(10))    //true

// // .delete(item) deletes the value from set
// set.delete(30)

// // .size gives the size of the Set
// console.log(set.size)

// // .clear() cleares the set
// set.clear();

// let username = ["pranav", "raju", "sneha" ,"raju", "sneha", "pranav"];

// // method1
// let set = new Set();
// for(const item of username){
//     set.add(item)
// }
// console.log(set) // { 'pranav', 'raju', 'sneha' }

// // method2 (ideal)
// let set2 = new Set(username);
// console.log(set2) //// { 'pranav', 'raju', 'sneha' }
// console.log([...set2]) //[ 'pranav', 'raju', 'sneha' ]



// // union()
// const A = new Set(['a', 'b', 'c']);
// const B = new Set(['b', 'c', 'd']);

// const C = A.union(B);
// console.log(C) //{ 'a', 'b', 'c', 'd' }

// const D = A.intersection(B);
// console.log(D)  // { 'b', 'c' }

// // A - B
// const E = A.difference(B)
// console.log(E)  // { 'a' }
// const F = B.difference(A)
// console.log(F)  //{ 'd' }

// // all values of A should be inside B
// console.log(A.isSubsetOf(B))    //false



// for a give string check if all charecters are unique or not
// input:  "abc" -> unique string
// input:  "abcda" -> not unique string

// const str = "abcc";
// const set = new Set(str);
// console.log(set)
// // const arr = str.split("");
// // const set = new Set(arr)
// if(set.size == str.length){
//     console.log("string is unique")
// }else{
//     console.log("string is not unique")
// }

// task 2 convert the below object into a Map
// input: obj = {
//     name: "pranav",
//     age: 20,
//     gender: "male"
// }
// output: map of the above object

// const obj = {
//     name: "pranav",
//     age: 20,
//     gender: "male"
// }

// // method 1
// const map = new Map(Object.entries(obj))
// console.log(map)

// // method 2
// const map2 = new Map();
// for(let key in obj){
//     map2.set(key, obj[key])
// }
// console.log(map2)