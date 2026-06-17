// this -> it referes to the object or the 
// context where the current code is executing
// let obj =  {
//     name: "pranav",
//     a:5,
//     b:6,
//     greet: function(){
//         console.log("Hello " + this.name)
//     },
//     sum: function(){
//         console.log(this.a + this.b)
//     },
//     mul(){
//         console.log(this.a * this.b)
//     }
// }

// obj.greet();    //Hello pranav
// obj.sum();      //11
// obj.mul();      //11


// function func(){
//     console.log(this)
// }
// func();


// let obj = {
//     name:"pranav",
//     obj1:{
//         name: "raju",
//         func1(){
//             console.log(this.name)
//         }
//     }
// }

// obj.obj1.func1();   //raju


// function func(){
//     console.log(this.name)
// }

// let obj1 = {
//     name: "pranav",
//     greet: func
// }
// let obj2 = {
//     name: "sourav",
//     greet: func
// }

// obj1.greet();
// obj2.greet();



// call bind apply
// In JS call bind apply are built in methods used to
// explicitely set the execution context ie. sets the "this" inside a function
// in simple words -> they allow us to borrow the this of an object to be used inside a function



// const person1 = {
//     name: "Amit",
//     age: 30
// }

// const person2 = {
//     name: "Sneha",
//     age: 25
// }

// function introduce(city, country) {
//     return `${this.name} is ${this.age} years old from ${city}, ${country}`
// }

// // call();
// console.log(introduce.call(person1, "Pune", "India") )

// // // apply();
// console.log(introduce.apply(person2, ["Goa", "India"]) )

// // bind();
// const introducePerson1 = introduce.bind(person1);
// console.log(introducePerson1("Pune", "India"));

const counter = {
    count: 0,
    increment: function(){
        this.count++;
        console.log(this.count)
    }
}

let func = counter.increment.bind(counter);
func()