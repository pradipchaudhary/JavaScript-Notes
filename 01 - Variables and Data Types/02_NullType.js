console.warn("The Null Type : ");

/*
The Null type is the second data type that has only one value: the special value null. Logically,
a null value is an empty object pointer, which is why typeof returns “object” when it’s passed a
null value in the following example:
*/

var car = null;
console.log(car);
console.log(typeof car); // object
console.log(typeof car === "object"); // true
console.log(undefined == null); // true
if (car !== null) {
    console.log("do something with car");
}
