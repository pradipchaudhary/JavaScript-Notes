// const num = [1, 2, 3, 4, 5];
// const find8 = num.find(function (n, i) {
//     console.log(n, i);
//     return
// });

const numbers = [2, 9, 8, 4, 7, 4, 6, 7, 1, 0, 3];

// const 9 number in numbers array
const findNine = numbers.find((number) => number === 1);

console.log(findNine);

// array.find(function(currentValue, index, arr), thisValue)

const students = Array("Ram", "Shyam", "Hari", "Sita", "Gita");

// find the Gita students name in sthe above students Array

const isSita = students.find((student) => student === "Hari");

console.log(isSita);

let arr = [{ age: 3 }, { age: 5 }, { age: 6 }, { age: 7 }];
let exists = arr.find((x) => x.age < 4);
// exists.age += 1;
console.log(arr);
