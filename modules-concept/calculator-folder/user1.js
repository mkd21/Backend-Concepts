

// import add from "../mathFolder/math.js";    syntax of ES module

// const add = require("../mathFolder/math.js");   // syntax of common js module


const {add , mul , subs , div} = require("../mathFolder/math.js");

console.log(add(3 , 4));
console.log(subs(3 , 4));
console.log(div(3 , 4));
console.log(mul(3 , 4));


// or without destructuring also 

const functionalities = require("../mathFolder/math.js");

console.log( functionalities.add(3 , 4));
console.log( functionalities.subs(3 , 4));
console.log( functionalities.div(3 , 4));
console.log( functionalities.mul(3 , 4));
