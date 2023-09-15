// This method is used to arrange/sort array’s elements either in ascending or descending order.

const numbers = [1, 3, 5, 2];
// console.log(numbers);

// Assending order
const aorder = numbers.sort(function (secondN, firstN) {
    console.log(" firstN : " + firstN, " secondN : " + secondN);
    if (secondN > firstN) {
        console.log("1");
        return 1;
    } else if (secondN < firstN) {
        console.log("-1");
        return -1;
    }
    console.log("0");
    return 0;
});

console.log(aorder);
