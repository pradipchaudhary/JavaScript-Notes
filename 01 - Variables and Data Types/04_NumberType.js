// "strict mode";

console.warn("The Number Type :-");
var age = 29;
console.log(age);
console.log(typeof age);
// var octNumber = 070; // octa
// console.log(octNumber);

var floatNumber = 1.0;
var floatNumber2 = 10.0;
// console.log(floatNumber);
// console.log(floatNumber2);

var floatNumber3 = 1.879;
// console.log(floatNumber3);
// console.log(isFinite(5));
// console.log(3 / 0);

// isNaN() Method
console.warn("NaN");

console.log(isNaN(NaN));
console.log(isNaN(38));
console.log(isNaN("Hello!"));
console.log(isNaN("10"));
console.log(isNaN(true));

/*
 *
 * Number Conversions
 * There are three functions to convert nonnumeric values into numbers:
 *
 * 1. Number()
 * 2. parseInt()
 * 3. parseFloat()
 *
 */

console.warn("Floating point value");

var floatNum = 3.125e7;
console.log(floatNum);
