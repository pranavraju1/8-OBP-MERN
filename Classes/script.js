// Classes in JS are templates for creating objects.
// They encapsulate data and behaviour into a single structure
// class User {
//     constructor(username, email){
//         this.username = username;
//         this.email = email
//     }
//     greet(){
//         console.log(`Hello ${this.username}`)
//     }
// }

// const user1 = new User('parnav', 'pranav@gmail.com');
// console.log(user1)
// console.log(user1.username)
// console.log(user1.email)
// user1.greet();

// Note: the methods created inside your Class automatically are assigned inside the Prototype


// class Student{
//     grade = "A";
//     section = "C"
//     constructor(name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;

//         if(marks > 90){
//             this.grade = "A"
//         }else if(marks > 80){
//             this.grade = "B"
//         }else if(marks > 60){
//             this.grade = "C"
//         }else{
//             this.grade = "F"
//         }
//     }
//     display(){
//         console.log(`Name: ${this.name},Age: ${this.age}, Grade: ${this.grade}`)
//     }
// }

// let student1 = new Student("pranav", 20, 95);
// console.log(student1)
// student1.display()

// // if marks is above 60 -> Grade is C
// // if marks is above 80 -> Grade is B
// // if marks is above 90 -> Grade is A
// // if marks is below 60 -> Grade is F




// Getter and Setter
// Getters and Setters are special methods that allow 
// controlled access to properties. Getters retrieve values
// setters modify them.
// they are accessed like properties and not methods


// class User {
//     constructor(name, age){
//         this._name = name;
//         this._age = age;
//     }
//     get age(){
//         return this._age;
//     }
//     set age(value){
//         if(value < 0 || value > 120){
//             console.log("Invalid age")
//         }else{
//             this._age = value
//         }
//     }
// }

// const user1 = new User("pranav", 20);
// console.log(user1._age) // 20
// console.log(user1.age)  //20 -> get age()
// user1.age = 25  
// user1.age = 500 // invalid age  


// staticMethods
// static methods belong to the class itself, not to the instance
// they are called on the class and not on objects
// class User{
//     constructor(name,role){
//         this.name = name;
//         this.role = role;
//     }

//     static createAdmin(name){
//         return new User(name, 'Admin')
//     }
//     static createGuest(name){
//         return new User(name, 'Guest')
//     }
// }

// const person1 = User.createAdmin("pranav");
// const person2 = User.createGuest("sourav");
// console.log(person1)
// console.log(person2)


// private fields are written with # prefix and can only be accessed inside the class
// they provide true encapsulation 

class BankAccount{
    #balance; //private fields
    constructor(name, initialBalance){
        this.name = name;
        this.#balance = initialBalance;
    }
    deposite(amt){
        this.#balance += amt
    }
    getBalance(){
        return this.#balance
    }
}

const user1 = new BankAccount("pranav", 100000);
// user1.#balance = 0 //Error 
user1.deposite(1000)
console.log(user1)








