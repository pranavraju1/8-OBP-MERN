
// // private fields are written with # prefix and can only be accessed inside the class
// // they provide true encapsulation 

// class BankAccount{
//     #balance; //private fields
//     constructor(name, initialBalance){
//         this.name = name;
//         this.#balance = initialBalance;
//     }
//     deposite(amt){
//         this.#balance += amt
//     }
//     getBalance(){
//         return this.#balance
//     }
// }

// const user1 = new BankAccount("pranav", 100000);
// // user1.#balance = 0 //Error 
// user1.deposite(1000)
// console.log(user1)


// // Encapsulation: is hiding internal implementation detials 
// // and exposing only necessary interfaces. Private fields enforce 
// // true encapsulation by making fileds genuinely inaccessible 
// // from outside


// // Public vs Private
// class DataComparison{
//     publicData = "i am public data";
//     #privateData = "i am private data";

//     publicMethod(){
//         console.log('public mehtod called')
//         this.#privateMethod();     
//     }

//     #privateMethod(){
//         console.log("Private method called")
//         console.log(this.#privateData);
//     }

//     testAccess(){
//         console.log(this.publicData)
//         console.log(this.#privateData)
//         this.publicMethod();
//         this.#privateMethod()
//     }
// }

// const obj = new DataComparison();
// // console.log(obj.publicData)
// // console.log(obj.#privateData)    //error
// // obj.publicMethod()
// // obj.#privateMethod()     //error
// obj.testAccess()

// //DOM in Classes
// class Card {
//     constructor(title, content){
//         this.title = title;
//         this.content = content;
//         this.element = null;
//     }

//     render(parnetId){
//         this.element = document.createElement("div");
//         this.element.className = "card";
//         this.element.innerHTML= `<h3>${this.title}</h3> <p>${this.content}</p>`;
//         const parent = document.getElementById(parnetId);
//         parent.appendChild(this.element)
//     }
//     remove(){
//         this.element.remove()
//     }
// }

// const card1 = new Card("Title 1", "content 1 asdasdasd asda asdas dasd asd asd asd asd asda sdqwe");
// const card2 = new Card("Title 2", "content 1 asdasdasd asda asdas dasd asd asd asd asd asda sdqwe");
// card1.render("container");
// card2.render("container");
// // card2.remove();




// // Class inheritance
// // parent class
// class Animal{
//     constructor(name){
//         console.log("animal constructor")
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound`)
//     }
// }
// // child class
// class Dog extends Animal{
//     constructor(){
//         super();
//         console.log("dog constructor")
//     }
//     bark(){
//         console.log(`${this.name} barks`)
//     }
// }

// const dog = new Dog("buddy");
// // dog.bark();
// // dog.speak();

// // super(): the super() keyword calls the parent 
// // constructor and must be called before 
// // accessing this in child class 


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student extends Person{
//     constructor(name, age, gender){
//         super(name, age)
//         this.gender = gender
//     }
//     study(){
//         console.log(`${this.name} is studying`)
//     }
// }

// const student1 = new Student("pranav", 20, "male")
// console.log(student1)
// student1.study()


// method ingeritance
// class Phone {
//     constructor(brand){
//         this.brand = brand
//     }
//     call(){
//         console.log(`${this.brand} is calling`)
//     }
// }

// class SmartPhone extends Phone{
//     constructor(brand){
//         super(brand)
//     }
//     takePhoto(){
//         console.log(`${this.brand} takes photo`)
//     }
// } 
// const phone1 = new SmartPhone("samsung");
// phone1.takePhoto();
// phone1.call();



// class Phone {
//     #price;
//     constructor(brand, price){
//         this.brand = brand
//         this.#price = price
//     }
//     call(){
//         console.log(`${this.brand} is calling`)
//     }
//     getPrice(){
//         return this.#price
//     }
// }

// class SmartPhone extends Phone{
//     constructor(brand,price){
//         super(brand, price)
//     }
//     takePhoto(){
//         console.log(`${this.brand} takes photo`)
//         // console.log(`price of the phone is ${this.#price}`) // cannot dirently access private property
//         console.log(`price of the phone is ${this.getPrice()}`) // cannot dirently access private property
//     }
// } 
// const phone1 = new SmartPhone("samsung", 30000);
// phone1.takePhoto();
// phone1.call();

// 4 OOPS priciples of OOPS
// 1. Encapsulation: is hiding internal implementation detials 
// and exposing only necessary interfaces. Private fields enforce 
// true encapsulation by making fileds genuinely inaccessible from outside

// 2. inheritance: Allows classes to reuse code from parent classes by inheriting
// their properties

// 3. Abstraction: Abstraction hides complex implementation detials and exposes the 
// necessary functionality

// class CoffeeMachine{
//     #boilWater(){
//         console.log("water is boiling")
//     }
//     #brew(){
//         console.log("Brewing")
//     }
//     makeCoffee(){
//         this.#boilWater();
//         this.#brew();
//         console.log("Coffee is ready")
//     }
// }

// const machine = new CoffeeMachine();
// machine.makeCoffee();


// 4. Polymorphism - Method overriding
// Allows objects of differnet classes to be treated as obj's of a common parent class while
// maintaining their specefic behaviour
// class Animal{
//     makeSound(){
//         console.log("Some sound")
//     }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("Woof")
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log("Meow")
//     }
// }
// const dog = new Dog();
// dog.makeSound();    //Woof
// const cat = new Cat();
// cat.makeSound();    //Meow


class Vehicle{
    start(){
        console.log("Engine is starting")
    }
}

class Car extends Vehicle{
    start(){
        super.start();
        console.log("Car is ready to run")
    }
}

const car = new Car();
car.start()