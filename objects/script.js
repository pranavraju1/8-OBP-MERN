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

let person1Obj = {
    name: "sourav",
    age: 20,
    gender: "male",
    key: "value"
}

for(let key in person1Obj){
    // printing all the key value pairs in an obj
    console.log(key, person1Obj[key])

}