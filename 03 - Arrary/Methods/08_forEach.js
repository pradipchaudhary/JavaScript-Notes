// This method helps to loop over array by executing a provided callback function for each element in an array.
const students = Array("Pradip", "Ramita", "Arjun");
console.log(students);

students.forEach(function (student, index, array) {
    console.log(index, student);
    //     console.log(index);
    //     console.log(array);
});

const rollNumber = new Array(5, 8, 22, 9, 3, 2, 1);
console.log(rollNumber);

rollNumber.forEach(function (value, index) {
    console.log(index, value);
});
