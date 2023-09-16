// This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

const array1 = new Array(1, 2, 3, [11, 12, 13]);
const array = [5, 6, 7];
array.push(10);
const newarray = array.concat(array1);
console.log(array1);
console.log(array);
console.log(newarray);
