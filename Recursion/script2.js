// find the maximum in the array using recursion
// let arr = [3, 8, 2, 6];

// function findMax(arr){
//     if(arr.length == 1){
//         return arr[0];
//     }
//     const maxOfRest = findMax(arr.slice(1));

//     if(arr[0] > maxOfRest){
//         return arr[0];
//     }else{
//         return maxOfRest
//     }
// }

// console.log(findMax(arr))


// reverse a string using recursion
// input -> "acciojob"
// output -> "bojoicca"


function reverseString(str){
    if(str.length == 0) return "";
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("acciojob"));

// "acciojob"
// reverse("cciojob") + a
// reverse("ciojob") + ca
// reverse("iojob") + cca
// reverse("ojob") + icca
// reverse("job") + oicca
// ...
// ...


