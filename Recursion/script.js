// 1 2 3 4 5
// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// function countDown(n){
//     if(n==0){
//         return
//     }
//     console.log(n)  //5 4 3 2 1 

//     countDown(n-1)
    
//     console.log("hello", n) // 
// }


// calculate the sum of 5 + 4 + 3 + 2 + 1 
// function sumOfN(n){
//     if(n==1){
//         return 1
//     }
    
//     return n + sumOfN(n - 1)

// }
// console.log(sumOfN(5))


// function power(base, exponent){
//     if(exponent == 0){
//         return 1
//     }
    
//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 4)) //-> 16 



let arr = [1,2,3,4,5];
// task: find the sum of elements using recursion

function sumOfArray(arr){
    if(arr.length == 0){
        return 0
    }
    return arr[0] + sumOfArray(arr.slice(1));
}
console.log(sumOfArray(arr))

