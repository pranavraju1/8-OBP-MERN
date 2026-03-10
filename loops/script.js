// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// let i = 1;
// let result
// while ( i <= 5 ) {
//     // result = i
//     console.log(i);
//     // i = i+1;
//     i++;
// }

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// let i = 5;
// while(i>=1){
//     console.log(i)
//     i--;
// }

// print all even numbers from 20 to 40 (both included)

// let i = 20;
// while(i<=40){
//     if(i%2==0){
//         console.log(i)
//     }
//     i++;
// }


// let i=0
// while(i<10){
//     console.log(i)
//     // i++;
//     i=i+2;
// }

// let i = 0
// let result;
// do{
//     result = i;
//     i++;
// }while(i<5)

// let result
// for(let i = 0; i < 3; i++){
//     // console.log(i)
//     result = i;
// }


// let i = 0;
// for(; i<3 ;){
//     console.log(i)
//     i++;
// }

// let result =0
// for(let i=0; i<10; i++){
//     if(i==5){
//         break;
//     }
//     console.log(i)
//     // result=i
//     console.log("hello")
// }

// // let result =0
// for(let i=0; i<5; i++){
//     // console.log("hello")
//     if(i==3){
//         continue;
//     }
//     console.log(i)

// }



// q1 you are given a number n find the number of digits in that number
// eg: n= 100 -> 3
// eg: n= 654654 -> 6
// eg: n= 9 -> 1



// let n = 12345;
// let count = 0
// while(n>0){
//     let reminder = n % 10;
//     n = n - reminder
//     n = n / 10;                                              
//     count++
// }
// console.log(count)


// q2. given a number n find the sum of its digits
// eg: n = 572 -> 5 + 7 + 2 -> 14


// let n = 572;
// let sum = 0
// while(n>0){
//     let reminder = n % 10;
//     n = n - reminder
//     n = n / 10;
//     sum = sum + reminder;
//     // sum += reminder;
// }
// console.log(sum)


// incase you want to multiply the digits
// let n = 572;
// let mul = 1;
// while(n>0){
//     let reminder = n % 10;
//     n = n - reminder
//     n = n / 10;
//     mul = mul * reminder
// }
// console.log(mul)

// given number n print its table till 10
// eg if n = 2
// print below
// 2x1=2
// 2x2=4
// 2x3=6
// 2x4=8
// 2x5=10
// 2x6=12
// 2x7=14
// 2x8=16
// 2x9=18
// 2x10=20


// for(let i=1 ; i<=10; i++){
//     let multiple = 2*i
//     console.log(`2 x ${i} = ${multiple}`)
//     // console.log("2 x " + i + " = " + multiple)
// }




// for(let i=0 ;i<5;){
//     console.log(i++)
// }//0 1 2 3 4


// for(let i=0 ;i<5;){
//     console.log(++i)
// } //1 2 3 4 5

// question find the first number that is divisible but 7 and 5 using for loop
// the number will be in between 1 and 500

let count = 0
for(let i=1; i<=500; i++){
    if(i%7 === 0 && i%5 ==0){
        if(count==2){
            break;
        }
        console.log(i)
        count++;
    }
}