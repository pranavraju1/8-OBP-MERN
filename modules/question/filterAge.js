// here you will write a function that decides if the user can enter the list or not
const isAdult = (age) => {
    if(age<18){
        return false
    }else{
        return true
    }
}

export default isAdult;