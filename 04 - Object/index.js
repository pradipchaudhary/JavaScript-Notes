// const person = { lastName: "Doe" };
// console.log(person);
// person.firstName = "John";
// console.log(person);
// person.age = 29;
// console.log(person);
// console.log(person.firstName);

// Nested Object
const person = {
    firstName: "Pradip",
    lastName: "Chaudhary",
    age: 29,
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
        console.log(this);
    },
    address: {
        country: "Nepal",
        ProviNumber: 1,
    },
    hobbies: ["Playing", "Writing"],
};
// console.log(person);
// console.log(person.fullName());
// console.log(person.address.country);
// console.log(person.hobbies);
// person.fullName();
// console.log(person.hobbies[0]);

const fullName = {
    name: {
        fullName: "Pradip Chaudhary",
    },
};
console.log(fullName);
console.log(Object.keys(fullName));
console.log(Object.values(fullName));
