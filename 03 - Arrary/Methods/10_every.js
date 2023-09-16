// This method checks every element in the array that passes the condition, returning true or false as appropriate.
const array = [2, 3, 4, 5, 6, 7, 8];

// all elements greater than 5
const greaterFive = array.every((arr) => arr > 5);
console.log(greaterFive);

// all elements less than 5
const lessNine = array.every(function (val, index, arr) {
    // console.log(val, index, arr);
    return val < 9;
});

console.log(lessNine);
