// extract all the odd elements of the array using recursion
// arr = [1,2,3,4,5,6];


// let arr = [1, 2, 3, 4, 5];


// function solution(arr){

//     let result = []
//     // here the recursive function becomes a helper function because 
//     // it takes help from the outer function (ie. it uses elements fromt the outer function)
//     function helper(arr, i){
//         if(i == arr.length){
//             return;
//         }
//         if(arr[i]%2 !== 0){
//             result.push(arr[i])
//         }
//         return helper(arr, i+1);
        
//     }
//     helper(arr, 0);
//     return result;
// }
// console.log(solution(arr))

// // Note: when your recursive function is independet of outside variables and only dependent on the input that is given 
// // it becomes a pure recursive function


// flatten the below array
// for example input [1, [2, [3, 4], 5], [6, 7]]
// output -> [1, 2, 3, 4, 5, 6, 7]
// Hint:
// Array.isArray(arr[i]) -> true if it is array 
// Array.isArray(arr[i]) -> false if it is not an array 

// let arr = [1, [2, [3, 4], 5]];
// function flatten(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){

//         if(Array.isArray(arr[i])){
//             result.push(...flatten(arr[i]))
//         }else{
//             result.push(arr[i])
//         }

//     }
//     return result;
// }
// console.log(flatten(arr))


// function fib(n){

//     // if(n==1) return 1
//     // if(n==0) return 0

//     //or  

//     if(n<2)return n

//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(0)) //0
// console.log(fib(3)) //2
// console.log(fib(5)) //5



// pick each charecter as the first char
// recursivly permute the remaining char
// combine the chosen char with each smaller permutaion
function permuteString(str){
    // when str has exactly 1 char (say "c") there is onlt 1 permutaion
    if(str.length == 1){
        return str;
    }

    const result = [];
    //loop over wach char as the 1st char 
    for(let i=0; i<str.length; i++){

        // choose char at i to be the 1st char of permutaion
        const firstChar = str[i];

        // build a new string that has all the charecters except the one in position i
        // for example, if str = "abc"
        // i = 0: firstChar = "a", remaining = "" + "bc" = "bc"
        // i = 1: firstChar = "b", remaining = "a" + "c" = "ac"
        // i = 2: firstChar = "c", remaining = "ab" + "" = "ab"
        const remaining = str.slice(0,i) + str.slice(i+1);

        // Recursive call on the remaining elements
        const permsOfRemaining = permuteString(remaining); 

        // for i=0
        // firstChar = "a", remaining = "bc"
        // permsOfRemaining = permuteString("bc")
        // this recursive call will eventually return ["bc", "cb"]
        for(const perm of permsOfRemaining){
            result.push(firstChar + perm)
        }
    }
    return result

}
console.log(permuteString("abc")) //[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

