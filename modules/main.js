// if the export is Default you can give it any name
// import somethingFromScript from "./script.js";

import User from "./script.js";

// named import should the the same name mentioned in the export
// import { printAge, printName }from "./script.js";


// if you want to use a custom name, in named import
import { printAge as somethingFromScript, printName }from "./script.js";




const user = new User("pranav", 20);
console.log(user);

printName(user);
somethingFromScript(user);



import { add, multiply, PI } from "./calculator.js";

console.log(add(1,2))
console.log(multiply(1,2))
console.log(PI)