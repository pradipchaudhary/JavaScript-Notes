// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const numbers = [1, 2, 3, 4, 5, 6, 7];
const person = new Array("Hari", "Sita", "Gita");

const includeFourteen = numbers.includes(14); // false
const includeFive = numbers.includes(5); // true
// console.log(includeFourteen);
// console.log(includeFive);

// const isSita = person.includes("Sita"); // true
const isSita = person.includes("sita"); // false
const isYounz = person.includes("Younz"); // false
console.log(isYounz);
