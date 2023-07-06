// Object Type
const obj = new Object();
console.log(obj);
console.log(typeof obj);

const obj2 = new Object(); ////legal, but not recommended

/*
*
*Each Object instance has the following properties and methods:
    constructor — 
    The function that was used to create the object. In the previous example, the constructor is the Object() function.

    hasOwnProperty(propertyName) — 
    Indicates if the given property exists on the object instance (not on the prototype). The property name must be specified as a string (for
    example, o.hasOwnProperty(“name”)).

    isPrototypeOf(object) — 
    Determines if the object is a prototype of another object.

    propertyIsEnumerable(propertyName) — 
    Indicates if the given property can be enumerated using the for-in statement (discussed later in this chapter). As with
    hasOwnProperty(), the property name must be a string.

    toLocaleString() — 
    Returns a string representation of the object that is appropriate for the locale of execution environment.

    toString() — 
    Returns a string representation of the object.

    valueOf() — 
    Returns a string, number, or Boolean equivalent of the object. It often returns the same value as toString().
*
*/