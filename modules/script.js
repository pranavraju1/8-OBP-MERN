class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

function printName(user){
    console.log(`User name is: ${user.name}`)
}

function printAge(user){
    console.log(`User name is: ${user.age}`)
}

// there can only be 1 export default in the script file
export default User;