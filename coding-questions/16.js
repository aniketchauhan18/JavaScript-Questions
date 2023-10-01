/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 16:
    Write a JavaScript ptogram to compare two objects top determine if the
    first one contains the same properties as the second one ( which may also
    have additional properties)
*/

const objA = {a: 1, b: 2, c: 3}; //a, b, c = property here
const objB = {a: 1, b: 2, c: 3};
const objC = {a: 1, b: 2, d: 3};

const objectsEqual = (a, b) => {
    console.log(Object.keys(a).every(key => b[key]));
}

console.log(objectsEqual(objA, objB));
