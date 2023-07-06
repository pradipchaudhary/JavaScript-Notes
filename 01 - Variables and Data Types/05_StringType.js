// String Type Data
// The String data type represents a sequence of zero or more 16-bit Unicode characters. Strings can be
// delineated by either double quotes (“) or single quotes (‘), so both of the following are legal:-

var firstName = "Pradip";
var lastName = "Chaudhary";
// console.log(firstName);
// console.log(typeof firstName);

/*
 * Character Literals
 * The String data type includes several character literals to represent nonprintable or otherwise useful
 *  characters, as listed in the following table:
 *
 */

console.log("Hello, \n Pradip"); // \n New line
console.log("this is a tab \t character"); // Tab

// Properties
var fullName = "Pradip Chaudhary";
console.log(fullName);
console.log(fullName.length);

// Converting to a String
// There are two ways to convert a value into a string.
// 1. toString()
console.log("Converting to String: ");
var age = 30;
var ageAsString = age.toString();
console.log(age, typeof age);
console.log(ageAsString, typeof ageAsString);

var found = true;
var foundAsString = found.toString();
console.log(found, typeof found);
console.log(foundAsString, typeof foundAsString);

// If a value is null or undefined, this method is not available.
