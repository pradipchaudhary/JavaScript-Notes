// This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const expenses = [20, 30, 10, 5];
// // console.log(expenses);
const reduce = expenses.reduce(function (accumulator, currentValue, index) {
    //     //     console.log("acumulator : " + accumulator, "element : " + element);
    const total = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${total}`
    );
    return total;
});

// console.log(reduce);

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//     const returns = accumulator + currentValue;
//     console.log(
//         `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
//     );
//     return returns;
// }

// array.reduce(reducer);
