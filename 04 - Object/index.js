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
// console.log(fullName);

const nameKey = "name";
const agekey = "age";

const nameValue = "Pradip Chaudhary";
const ageValue = 29;

const personOne = {
    nameKey: nameValue,
    agekey: ageValue,
    "full name": "This is the full name ",
};
// console.log(personOne);
// personOne.name = "Younz";
// console.log(personOne);
// console.log(Object.keys(personOne));

// console.log(personOne["age"]);
// console.log(personOne["full name"]);

// Constructor Notation: (new is the constructor function)
const personTwo = new Object();
personTwo.age = 20;
// add values by the brackets notation
personTwo["full name"] = "John Doe";
// console.log(personTwo);

// Call the object

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(typeof Object.entries(person));

// null and undefined objects return blank objects
// const obj1 = new Object(null);
// console.log(obj1);
// const obj2 = new Object(undefined);
// console.log(obj2);

const obj = {
    foo: 5,
    // You should not define such a method on your own object,
    // but you may not be able to prevent it from happening if
    // you are receiving the object from external input
    propertyIsEnumerable() {
        return false;
    },
};

console.log(obj.propertyIsEnumerable("hello")); // false; unexpected result
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result
