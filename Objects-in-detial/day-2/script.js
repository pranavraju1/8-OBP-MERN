// // Note: when you pass callback function as a function declaration
// // the this will be your window object but you can fix it using an arrow fucntion
// // Arrow functions do not have their own "this" they borrow it from the enclosing scope
// const user = {
//     name: "Kavita",
//     hobbies: ["reading", "coding", "gaming"],

//     // showHobbies: function(){
//     //     this.hobbies.forEach(function(hobby){
//     //         console.log(this)
//     //         // console.log(this.name + " likes " + hobby)
//     //     })
//     // }
//     showHobbies: function(){
//         this.hobbies.forEach((hobby) => {
//             // console.log(this)
//             console.log(this.name + " likes " + hobby)
//         })
//     }
// }

// user.showHobbies();


// Constructor Function
// A Constructor Function is a special function that serves as a blueprint for creating multiple objects
// with similar properties and behaviors.
// function Person(name, age, city){
//     this.name = name,
//     this.age = age,
//     this.city = city
// }

// const person1 = new Person("Pranav", 20, "Pune")
// const person2 = new Person("Pranav2", 22, "Pune2")
// const person3 = new Person("Pranav3", 23, "Pun3")
// const person4 = new Person("Pranav4", 24, "Pun4")
// console.log(person1, person2, person3, person4)

// // new keyword
// // the new keyword helps in creating a new instance for the Constructor Function



// function User(username, email, role = "user"){
//     this.username = username || "Guest"
//     this.email = email
//     this.role = role
//     this.isActive = true
//     this.accountCreated = Date.now()
// }

// let user1 = new User('nova', 'nova@gmail.com', "admin")
// console.log(user1)


// function Calculator(brand) {
//     this.brand=brand;
//     this.currentValue = 0;
    
//     // intance methods
//     this.add = function(num){
//         this.currentValue = this.currentValue + num
//         return this.currentValue
//     }

//     this.reset = function(){
//         this.currentValue = 0
//     }
// }

// let calc1 = new Calculator("casio");
// console.log(calc1.add(5))   //5
// console.log(calc1.add(5))
// calc1.reset()
// console.log(calc1.add(6))


// task create a constructor function Rectangle which takes length and width as input
// it has 3 methods
    // 1. getArea() -> returns the area of the rectangle
    // 2. getPerimeter() -> returns the perimeter of the rectangle
    // 3. isSquare() -> returns true if its a square and false if its not



// function Rectangle(length, width){
//     this.length = length;
//     this.width = width;

//     this.getArea= function(){
//         return this.length * this.width
//     }
//     this.getPerimeter= function(){
//         return 2 * (this.length + this.width)
//     }
//     this.isSquare = function(){
//        if (this.length == this.width){
//          return true
//        }else{
//         return false
//        }
//     }
// }

// const rec1 = new Rectangle(10, 10);
// console.log(rec1.getArea())
// console.log(rec1.getPerimeter())
// console.log(rec1.isSquare())




function BanckAccount(owner, balance){
    this.owner = owner;
    this.balance = balance;

    this.checkBalance = function(){
        return this.owner + " balance is: " +  this.balance
    }

    this.deposit = function(amount){
        this.balance = this.balance + amount;
    }

    this.withdraw = function(amount){
        if(amount < this.balance){
            this.balance = this.balance - amount;
        }else{
            return "insufficient balance"
        }
    }
}

const acc1 = new BanckAccount("pranav", 10000);
// console.log(acc1.checkBalance());
// console.log(acc1.deposit(500));
// console.log(acc1.checkBalance());
// console.log(acc1.withdraw(100000));
// console.log(acc1.checkBalance());

// acc1.balance = 100000000
// console.log(acc1.checkBalance())

const deposit1 = acc1.deposit.bind(acc1);

