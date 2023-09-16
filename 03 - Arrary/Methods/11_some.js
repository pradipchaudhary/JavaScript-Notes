// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8);
// const arr = [1, 2, 3];
// console.log(num);

// at least one element greater than  5
const greaterFive = arr.some(function (a) {
    console.log("a : ", a);
    return a > 5;
});
console.log(greaterFive);

// at least one element is less than or equal to 0
const lessOrEqualToOne = arr.some((value) => {
    return value < 0 || value === 0;
});
console.log(lessOrEqualToOne);
