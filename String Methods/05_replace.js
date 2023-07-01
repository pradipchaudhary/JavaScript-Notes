// Replace String Methods
// syntax string.replace("SearchValue", "ReplaceValue")
const news =
    "Sri Lanka and the Netherlands will face each other in a high-octane clash of the Super Six stage of the World Cup Qualifier on June 30. Both sides secured their place in the Super Six and are still in contention for booking a slot in the World Cup.";
const replaceOne = news.replace("of", "Off");
const replaceAll = news.replaceAll("Sri Lanka", "Nepal");
// Console
console.log(replaceOne);
console.log(replaceAll);

// Can you provide an example of replacing a substring within a larger string without using the inbuilt replace function?
// Answer:-
// //////////////////////////////////////////////////////////////////
function replaceSubstring(str, oldSubstr, newSubstr) {
    var index = str.indexOf(oldSubstr);
    if (index === -1) {
        return str;
    }
    return (
        str.slice(0, index) +
        newSubstr +
        replaceSubstring(
            str.slice(index + oldSubstr.length),
            oldSubstr,
            newSubstr
        )
    );
}

// Example usage
var originalString = "The quick brown fox jumps over the lazy dog.";
var newString = replaceSubstring(originalString, "lazy", "active");
console.log(newString); // Output: "The quick brown fox jumps over the active dog."

// How can you replace all occurrences of a substring within a string without using the inbuilt replace function in JavaScript?
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
}

const originalString = "Hello world, hello universe!";
const newString = replaceAll(originalString, "hello", "hi");

console.log(newString); // Output: "Hi world, hi universe!"
