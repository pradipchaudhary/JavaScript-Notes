// This method is used to arrange/sort array’s elements either in ascending or descending order.

const numbers = [1, 3, 5, 2];
// console.log(numbers);

// Ascending order
const ascendingOrder = numbers.sort(function (secondN, firstN) {
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

console.log(ascendingOrder); // Output : 1, 2, 3, 5

const descendingOrder = numbers.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
});

console.log(descendingOrder);
