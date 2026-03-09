// let week = 'mon'
// let week = 'tue'
// let week = 'wed'
// let week = 'thurs'
// let week = 'fri'
// let week = 'sat'
// let week = 'sun'

// if(week == 'mon'){
//     console.log("this is monday")
// }else if(week == 'tue'){
//     console.log("this is tuesday")
// }else if(week == 'wed'){
//     console.log("this is wednesday")
// }





let a = 5;

switch(a){
    case 4:
        console.log("right answer")
        break;
    // you can group cases like this
    case 6:
    case 5:
        console.log("too big");
        break;
    default:
        console.log("invalid")
}



let week = 'sun'

// if(week == 'mon'){
//     console.log("this is monday")
// }else if(week == 'tue'){
//     console.log("this is tuesday")
// }else if(week == 'wed'){
//     console.log("this is wednesday")
// }

switch(week){
    case "mon":
        console.log("this is monday");
        break;
    case "tue":
        console.log("this is tuesday");
        break;
    case "wed":
        console.log("this is wednesday");
        break;
    case "thur":
        console.log("this is thursday");
        break;
    case "fri":
        console.log("this is friday");
        break;
    case "sat":
        console.log("this is saturday");
        break;
    case "sun":
        console.log("this is sunday");
        break;
    default:
        console.log("invalud input")
    
}