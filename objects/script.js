// singular values in variables
// let name = "pranav";
// let age = 20;



// let person1 = ["sourav", 20, "male"];
// let person2 = ["pranav", 24, "male"];
// let person3 = ["aditi", 27, "female"];
// let person4 = ["pragya", 25, "female"];
// console.log(person1[1])


// Objects 

// let person1Arr = ["sourav", 20, "male"];

// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male"
// }


// console.log(person1Arr[0])
// accessing values in an object
// method 1
// console.log(person1Obj.name)    //"sourav"
// console.log(person1Obj.age)     //20
// console.log(person1Obj.gender)  //"male"


// method 2
// console.log(person1Obj["name"]) //"sourav"
// console.log(person1Obj["age"])   //20
// console.log(person1Obj["gender"])   //"male"

// let key = "name";
// console.log(person1Obj.key)     //undefined
// console.log(person1Obj[key])    //sourav







// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     "likesBirds": true, //your key can also be a string,
//     "likes Animals": false
// }

// console.log(person1Obj.likesBirds)      //true
// console.log(person1Obj["likesBirds"])   //true
// console.log(person1Obj["likes Animals"])    //false




// let person1Arr = ["sourav", 20, "male"];
// person1Arr[0] = "ankit";
// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
// }

// updating values in an object
// person1Obj.name = "ankit"
// person1Obj["name"] = "ankit"

// console.log(person1Obj)



// task1 : print the value 8 in points in the below obj

// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     points:[1,5,8,10]
// }
// console.log(person1Obj.points[2])
// console.log(person1Obj["points"][2])


//task: print 50 from the obj below 
// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     points:{
//         first: 100,
//         second: 50,
//         third: 80,
//     }
// }
// console.log(person1Obj.points.second)   //50
// console.log(person1Obj["points"]["second"]) //50



// let person2Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     points:{
//         first: 100,
//         second: 50,
//         third: {
//             innerpoint:{
//                 key: "value"
//             }
//         }
//     }
// }
// console.log(person2Obj.points.third.innerpoint.key)



// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
// }


// add properties to an obj
// let obj = {};
// obj.name = "sourav";
// obj.age = 20;
// obj.gender = "male";

// console.log(obj)    //{ name: 'sourav', age: 20, gender: 'male' }



// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// console.log(person1Obj) //{ name: 'sourav', age: 20, gender: 'male', key: 'value' }
// // deleting a property from an object
// delete person1Obj.key

// console.log(person1Obj) //{ name: 'sourav', age: 20, gender: 'male' }



//////////////////////////// key exceptions   /////////////////////////////////////

// let obj = {
//     "one": 1,
//     "two": 2,
//     "three": 3 
// }
// // console.log(obj["one"]) //1
// // console.log(obj.one) //1

// let obj1 = {
//     1 : 1,
//     2 : 2,
//     3 : 3 
// }

// // console.log(obj1.1) //error
// console.log(obj1["1"])  //1
// console.log(obj1[1])  //1


///////////////////////////   in operator    ////////////////////
// in operator is used to find a property inside an obj
// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// console.log("gender" in person1Obj)     //true
// console.log("address" in person1Obj)    //false

// let obj = {
//     key: undefined,
// }
// console.log(obj.key)    // undefined
// console.log("key" in obj)   //true

/////////////////////  for in loop ///////////

// gives me the keys in the obj 

// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// for(let key in person1Obj){
//     // printing all the key value pairs in an obj
//     console.log(key, person1Obj[key])

// }


////////////////////// Object.keys()  and Object.values() /////////////////


// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// Object.keys(obj) -> gives you an array of keys 
// console.log(Object.keys(person1Obj));    //[ 'name', 'age', 'gender', 'key' ]

// Object.values(obj) -> gives you an array of values 
// console.log(Object.values(person1Obj));  //[ 'sourav', 20, 'male', 'value' ]

//to find the length of an object
// console.log(Object.keys(person1Obj).length);    //4



// for any given obj display all its values without using forin loop
// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// let keys = Object.keys(person1Obj);
// for(let i=0; i<keys.length; i++){
//     console.log(person1Obj[keys[i]])
    
// }


// find the sum of elements in the object
// let obj = {
//     mark1: 50,
//     mark2: 30,
//     mark3: 40,
//     mark4: 50,
// }

// let values = Object.values(obj);
// let sum = 0;
// for(let i=0; i<values.length; i++){
//     sum += values[i]
// }
// console.log(sum)


//// insert country: "India" inside address /////
// let data = {
//     address:{
//         city: "pune",
//         pin: 411014,
//     }
// }
// data.address.country = "India";
// console.log(data)


/////////////////////////   array of object ///////////////////


// let students = [
//     {id:1, name: 'Aman', marks: 82, gender: "male"},
//     {id:2, name: 'Sara', marks: 91, gender: "female"},
//     {id:3, name: 'Rohit', marks: 25, gender: "male"},
//     {id:4, name: 'Sachin', marks: 100, gender: "male"},
//     {id:5, name: 'Shreya', marks: 30, gender: "female"},
//     {id:6, name: 'Astha', marks: 99, gender: "female"},
// ]

// taks1: print the name of all the students

// for(let i=0; i<students.length; i++){
//     let obj = students[i];
//     console.log(obj.name)
// }
// task2: print the name of all female students
// for(let i=0; i<students.length; i++){
//     let obj = students[i];
//     if(obj.gender == 'female'){
//         console.log(obj.name)
//     }
// }

// task3: print the name of male student who got below 50

// for(let i=0; i<students.length; i++){
//     let obj = students[i];
//     if(obj.gender == 'male' && obj.marks <50){
//         console.log(obj.name)
//     }
// }



/////////////////// Object destructuring ////////////////////

// let user = {
//    name: "Prisha",
//    age: 23,
//    city: "Pune" 
// }

// // let name = user.name;
// // let age = user.age; 

// let {name, age} = user

// console.log(name)   //"Prisha"
// console.log(age)    //23


// let product = {
//     title: "Phone",
//     price: 30000
// }

// // destructuring using the name of some other variable
// let {title: productTitle, price: productPrice} = product;

// console.log(productTitle, productPrice); //Phone 30000



// let profile = {
//     username: "neo",
//     address:{
//         city: "Pune",
//         pin: 411057
//     }
// }

// let {address} = profile
// console.log(address.city)





















// let people = [
//   { name: "Alice", city: "NYC" },
//   { name: "Bob", city: "LA" },
//   { name: "Charlie", city: "NYC" }
// ];


// {
//   NYC: [{name:"Alice", city:"NYC"}, {name:"Charlie", city:"NYC"}],
//   LA: [{name:"Bob", city:"LA"}]
// }

// let result = {}
// for(let i=0; i<people.length; i++){
//     let city = people[i].city;
//     if(!result[city]){
//         result[city] = [];
//     }
//     result[city].push(people[i])
// }
// console.log(result)

















// wordCount("hello world hello")  →  { hello: 2, world: 1 }
// wordCount("The the THE")        →  { the: 3 }
// wordCount("one")                →  { one: 1 }


function wordCount(str){
    str = str.toLowerCase();
    let words = str.split(" ");
    let result = {}
    for(let i=0; i<words.length; i++){
        if(!result[words[i]]){
            result[words[i]] = 1
        }else{
            result[words[i]]++
        }
    }
    console.log(result)
}
wordCount("hello world hello")