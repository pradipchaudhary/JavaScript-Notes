// This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

const names = ["hari", "Sara", "Sita"];
console.log(names);

const joinByDashes = names.join("-");
console.log(joinByDashes);
console.log(typeof joinByDashes);

const numbers = Array(1, 2, 3, 4, 5);

const joinAll = numbers.join("");
console.log(joinAll);
console.log(typeof joinAll);

const numbers1 = [1, 2, 3, 4, 5];

console.log(numbers1.join(" -"));
