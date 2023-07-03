"strict mode";

// Q: What is the variable in JavaScript?
// Answer :-  A variable in JavaScript is a container that stores a value, which can be a string, number, boolean, object, or any other data type.

function doSomething() {
    console.log("do something ...");
}
doSomething();

// Single Comment

/*
 * Multi
 * Line `
 * Comment
 *
 */

var name;
name = "Pradip Chaudhary";
name = 100; //legal, but not recommended
console.log(name);

// local variables
function test() {
    var message = "hi"; // Local variable
    console.log(message);
}
test();
// console.log(message);

// Global Variables
function test2() {
    say = "Welcome to Global Variable";
    console.log(say);
}
test2();
console.log(say);
