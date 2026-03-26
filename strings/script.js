// let world = "World"
// let str = `Hello ${world}`
// console.log(str)

// if you want to display the string in a particular format use backticks
//  using "" or '' will not work here
// let fruits = `fruits:
//     * apple
//     * banana
//     * kiwi
// `
// console.log(fruits);


////////////////////  special charecter ///////////////////

// \n -> denotes line break
// let fruits = "fruits: \n * apple \n * banana \n * kiwi";
// console.log(fruits)


// both are same
// let str1 = "hello\nworld";
// let str2 = `hello
// world`

// if(str1 == str2) console.log("they are same")

// /////////////////////  backslash ///////////////////

// this is how you print backslash
// console.log("backslack: \\")

///////////////////////  qoutes ///////////////

// when you want to use ' ore " inside '' or ""
// console.log('Hi i\'m pranav')
// console.log("Hi i'm \"pranav\" ")




////////////////// tab ////////////////

// this is how you print tabs (multiple space)
// console.log("Hi \t I'm \t pranav");


//////////////e////////////////////////////////////////////////////////////////////////////////



// let str = "hello";
// let arr = ['h','e','l','l','o'];

// console.log(str[0]) // h
// console.log(str[str.length - 1]) //o
 
//Note: do not use .length() as length is not a method its a property 

// console.log(str.at(0))  // h
// Note: you cannot use -ve index in str[] but you can use it in str.at()






/////////////////////////////     iterating through the string //////////
// let str = "hello";
// for(let i=0; i<str.length; i++){
//     console.log(str[i])
// }
// for(let char of str){
//     console.log(char)
// } 


///////////////////////  strings are not mutable   /////////////////////////////

// let str = "hello";
// let arr = ['h','e','l','l','o'];

// arr[0] = 'H'
// str[0] = 'H'
// console.log(str); //hello


////////////////////   uppercase ////////////

// let str = "hello";
// .toUpperCase() converts the string into uppercase
// console.log(str.toUpperCase())

// console.log(str[0].toUpperCase() + str.slice(1))  //Hello

// let STR = "HELLO";
// .toUpperCase() converts the string into lowercase
// console.log(STR.toLowerCase());

// task: you are given a string convert it into camelcase implement the function to do this
// input1 = hello   -> Hello
// input2 = jAVAsCript  -> Javascript
// input1 = the -> The

// let string = 'jAVAsCript'
// camelCase(string)
// function camelCase(str){
    // console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())   
            
    //or
    
    // str = str.toLowerCase();
    // console.log(str[0].toUpperCase() + str.slice(1))   

// }




///////////////////////// indexOf //////////////////////////
// syntax str.indexOf(substring, index(optional))

// let str = "hello";
// console.log(str.indexOf('h')) // 0
// console.log(str.indexOf('l')) // 2
// console.log(str.indexOf('z')) // -1

// this give the starting index of the word
// let str2 = "Widget with id";
// console.log(str2.indexOf('Widget')); // 0
// console.log(str2.indexOf('with')); // 7
// console.log(str2.indexOf('id')); // 1



///////////////////////// includes //////////////////////////
//  to search a substring inside a string
// syntax str.includes(substring, index(optional))
// let str2 = "Widget with id";

// console.log(str2.includes('Widget'))  //true
// console.log(str2.includes('widget'))  //false


///////////////////////// startsWith and endsWith ////////////

// let str2 = "Widget with id";
// console.log(str2.startsWith("Wid")) //true
// console.log(str2.endsWith("id")) //true



/////////////////////////   substrings  ///////////////

// 1. slice
// let str = 'stringify';

// console.log(str.slice(0,5)) //strin
// console.log(str.slice(5))   //gify
// console.log(str.slice(-4, -1))   //gif

//2. substring
// console.log(str.substring(0,5)) //strin

// in substring if the 1st index is greater than the 2nd index
// it will interchange them to give the right answer
// substring does not support -ve indexs
// console.log(str.substring(6,2)) //ring
// console.log(str.substring(-4, -1)) //""


// 3. substr
// syntax -> str.substr(index, substring length)
// let str = 'stringify';
// console.log(str.substr(2,4))    //ring
// console.log(str.substr(2,5))    //ringi
// console.log(str.substr(-4,2))    //gi


//////////////////////////////////  ASCI values   //////////////////////////////////////

//  finding ASCI values
// let char = "A";
// // char -> asci value
// console.log(char.charCodeAt(0)) // 65

// let asciCode = 65;
// // asci value -> char
// console.log(String.fromCharCode(asciCode))  //A


////////////////////////////////  replace methods   ///////////////////

// let message = "javascript is fun. javascript is powerful";

// this will only replace the first javascript to JS
// console.log(message.replace("javascript", "JS"));   //JS is fun. javascript is powerful

// this will replace all the javascript with JS
// console.log(message.replaceAll("javascript", "JS"));    //JS is fun. JS is powerful


// you are given the below input convert it into a normal sentance
// let input = "hi.I.am.sourav,.nice.to.meet.you"
// console.log(input.replaceAll('.',' '));

///////////////////////// split and join //////////////////////

// split
// 1. string as input -> array as output
// 2. splits the string accorging to the given charecter
// let input = "hi.I.am.sourav,.nice.to.meet.you"
// console.log(input.split("."));
// console.log(input.split("")); //this will you give you all the charecters in your string


// let input2 = "hi I am sourav nice to meet you"
// let result = input2.split(' ')  //this will give you all the words in the sentence

// join method
// 1. array -> string
// joins the array of string according to the given parameter
// console.log(result.join("-"))   //hi-I-am-sourav-nice-to-meet-you
// console.log(result.join(" "))   //hi I am sourav nice to meet you

//task create a acronym generator
// eg input -> national aeronautics space administration
// output -> NASA
// let str = "national aeronautics space administration"
// function acronym(string){
//     let words = string.split(" ");
//     let result = ""
//     for(let i=0;i<words.length;i++){
//         let word = words[i];
//         let capitalLetter = word[0].toUpperCase();
//         result = result + capitalLetter
//     }
//     return result
// }
// console.log(acronym(str));

//////////////////////////  trim() ////////////////////

// removes spaces from the start and end of the string
// let name = "   sourav    ";

// console.log(name)
// // removes spaces fromt both ends
// console.log(name.trim()); //sourav

// // removes space from start
// console.log(name.trimStart()) //sourav   

// // removes space from end
// console.log(name.trimEnd()) //   sourav


//////////////////////////  padding  ///////////////////////////////
// used for masking values

// syntax -> str.padStart(length of the string, char you want to mask)
// this will mask at the begining of the str
// let code = "56";
// console.log(code.padStart(10, "*"));    //********56

// let code2 = "46"
// console.log(code2.padEnd(8,"0"));   //46000000

/////////////////////////////////////////////////////////////////////////

//task1: return the reverse of a string
// intput -> "hello"
// output -> "olleh"

// let str = "hello";
// function reverse(string){
//     // method 1
//     // console.log(string.split('').reverse().join(""))

//     // method
//     let result = ""
//     for(let i=string.length-1; i>=0; i--){
//         result = result + string[i]
//     }
    
//     return result
    
// }
// console.log(reverse(str));


// task2: for a given string count the number of vowels 
// input -> asdesdisd
// output -> 3

// let str = "asdesdisd";
// function countVowel(string){
//     let count = 0;
//     for(let i=0; i<string.length; i++){
//         let letter = string[i];
//         if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowel(str))




// task3: for a given string check if it is a palindrome
// input -> malayalam
// output -> true

// let str = "malayalam"
// function checkPali(string){
//     let reverse = string.split('').reverse().join("")
//     if(string == reverse){
//         return "is palindrome"
//     }else{
//         return "is not palindrome"
//     }
// }
// console.log(checkPali(str))


// task4 convert the sentence into camel case
// input: "hello world"
// output: "Hello World"

// input: "asd ASDASD wqeqweq"
// output: "Asd Asdasd Wqeqweq"   






