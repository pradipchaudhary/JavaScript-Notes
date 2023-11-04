// Understanding Call, Bind and Apply Methods in JavaScript

// Simple JavaScript Object whith speak methods

const cat = {
    name: "Oreo",
    noise: "Meow",
    speak: function () {
        return `${this.name} says ${this.noise}`;
    },
};

const dog = {
    name: "kale",
    noise: "woof",
    speak: function () {
        return `${this.name} says ${this.noise}`;
    },
};

// console.log(cat.speak());
// console.log(dog.speak());

const hands = {
    name: "kale",
    noise: "Ha Ha Ha",
};

const cow = {
    name: "rami",
    noise: "Mai Mai Mai",
};

function speak() {
    return `${this.name} says ${this.noise}`;
}

// Call the same function on the above two objects
console.log(speak.call(hands));
console.log(speak.call(cow));

// object methods with two arguments
function walk(adj, place) {
    return `${this.name} like to ${adj} walk to the ${place}`;
}

console.log(walk.call(cow, "crzy", "gaighat"));
