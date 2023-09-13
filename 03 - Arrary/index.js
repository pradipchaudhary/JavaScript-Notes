const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "orange";

// console.log(fruits);

// console.log(Object.keys(fruits));
// console.log(Object.values(fruits));

// Arrary Constructor
// Note: Array() can be called with or without new. Both create a new Array instance.

let newArray = new Array(2, 4);
console.log(newArray);

let newArray1 = Array(2, 4, 6);
console.log(newArray1);
