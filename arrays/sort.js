// let arr = [1, 2, 15];

// if you only write arr.sort() it will convert the numbers into string and compare them
// // ie. sort() by default does string comparison
// arr.sort(); //[ 1, 15, 2 ]

// console.log(arr);

// to use your own sorting order we need to supply function as the arg of arr.sort()

// let arr = [1, 2, 15];
// // ascending order
// function compare(a, b){
//     if(a > b) return 1;   //if the first value is greater than the second
//     if(a==b) return 0;  //if values are equal
//     if(a < b) return -1;  //if first value is equal to the second
// }
// descending order
// function compare(a, b){
//     if(a < b) return 1;   
//     if(a==b) return 0;  
//     if(a > b) return -1;  
// }

// arr.sort(compare);
// console.log(arr);



// let arr = [1, -2, 15, 2, 0, 8];
// arr.sort(function(a, b){
//     // console.log(a + " <> " + b)

//     // for ascending order
//     // return a - b;

//     // for descending order
//     return b - a;
// })
// console.log(arr)


// let students = [
//     {name: "pranav", marks: 50},
//     {name: "sourav", marks: 100},
//     {name: "ansh", marks: 5},
//     {name: "pragya", marks: 80},
//     {name: "swathi", marks: 45},
// ]

// students.sort(function(a, b){
//     return a.marks - b.marks
// })

// // sorts the array in ascending order of marks
// console.log(students)


// sort the array in ascending order of number of skills known to a students
// let students = [
//   { name: "pranav", marks: 50, skills: { arr: ["js", "html", "python"] } },
//   { name: "sourav", marks: 100, skills: { arr: ["js", "python"] } },
//   { name: "ansh", marks: 5, skills: { arr: ["js"] } },
//   { name: "pragya", marks: 80, skills: { arr: ["js", "html", "python", "c++"] }},
//   { name: "swathi", marks: 45, skills: { arr: ["js", "html", "python"] } },
// ];

// students.sort(function(a,b){
//     return a.skills.arr.length - b.skills.arr.length
// })
// console.log(students);