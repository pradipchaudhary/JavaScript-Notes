/*
 *
 * There are five simple Data Types (also Called Primitive types)
 * 1. Undefine
 * 2. Null
 * 3. Boolean
 * 4. Number
 * 5. String
 *
 * There are also one complex data type called
 * 6. Object
 *
 *
 */

console.warn("Data Type: " + "Undefine, Null, Boolean, String, Number");

// :: Types Operator
/*
 *
 * 1. “undefined” if the value is undefined
 * 2. “boolean” if the value is a Boolean
 * 3. “string” if the value is a string
 * 4. “number” if the value is a number
 * 5. “object” if the value is an object (other than a function) or null
 * 6. “function” if the value is a function
 *
 */

var feature;
var money = "";
var isReal = false;
var salary = 0;
var skill = "JavaScript";
var pdf = ["Pro JavaScript", "JavaScript", "HTML5 Game"];
var employee = {
    fullName: "pradip Chaudhary",
    role: "Software Engineer",
};

function printEmploy() {
    console.log("Functional employee!");
}

console.warn("Types of: ");
console.log(typeof features);
console.log(typeof money);
console.log(typeof isReal);
console.log(typeof salary);
console.log(typeof skill);
console.log(typeof employee);
console.log(typeof pdf);
console.log(typeof printEmploy);
