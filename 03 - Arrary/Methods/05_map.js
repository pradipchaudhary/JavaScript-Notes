// This method creates a new array with the results of calling a provided function on every element in this array.

const num = new Array(1, 2, 3, 4, 5);
console.log(num);

num.map(function (n, i, arr) {
    //     console.log(" Index: " + i + " " + "numbers:" + n);
    console.log(n * 2);
});

const city = ["KTM", "Pokhara", "Biratnagar"];
console.log(city);

city.map(function (c, i, arr) {
    console.log("Index: " + i + " " + c + " arr: " + arr);
    console.log(typeof c);
});
