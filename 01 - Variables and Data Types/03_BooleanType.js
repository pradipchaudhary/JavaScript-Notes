console.info("The Boolean Type : ");

/*
 *
 * The Boolean type is one of the most frequently used types in ECMAScript and has only two literal values: true and false. These values are distinct from numeric values, so true is not equal to and false is not equal to 0. Assignment of Boolean values to variables is as follows:
 *
 */

var found = true;
var lost = false;

console.log(found);
console.log(lost);

console.log("Typeof :: ", found);
console.log(found == lost);

// Convert any type of data  into Boolean
var message = "Hello, world!";
console.log(message);
var convertAsBoolean = Boolean(message);
console.log(convertAsBoolean);

/*
DATA TYPE               VALUES CONVERTED TO TRUE                    VALUES CONVERTED TO FALSE
Boolean                 true                                        false
String                  Any nonempty string                         “” (empty string)
Number                  Any nonzero number (including infinity)     0, NaN (See the “NaN” section later in this chapter.)
Object                  Any object                                  null
Undefined               n/a                                         undefined
*/

var myMessage = "I 💝 U.";
if (myMessage) {
    console.log("💝 true");
}
