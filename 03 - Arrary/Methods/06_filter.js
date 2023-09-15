// This method creates a new array with only elements that passes the condition inside the provided function.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers);
// numbers.filter(function (number) {
//     //     console.log(number);
//     if (number < 6) {
//         console.log(number);
//     }
// });

const fruits = ["Apple", "Orange", "Banana", "Papaya"];
console.log(fruits);
fruits.filter(function (fruit) {
    if ((fruit == "Apple") | (fruit == "Orange")) {
        console.log(fruit);
    }
});
