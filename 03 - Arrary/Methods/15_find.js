/* 
Array.prototype.find()
 The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

 => If you need the index of the found element in the array, use findIndex().
 => If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the   value instead of using a testing function.)
 => If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
 => If you need to find if any element satisfies the provided testing function, use some().

*/

/*

Parameters

callbackFn
A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array find() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.


*/

// Find an object in an array by one of its properties

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

console.log(inventory);

function isBananas(fruit) {
    return fruit.name === "bananas";
}

console.log(inventory.find(isBananas));

const isCherries = inventory.find(function (fruit) {
    return fruit.name === "cherries";
});
console.log(isCherries);
