/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 2:
    Write a JavaScript program to get the extension of a filename.
*/

// String.fromCharCode
// charCodeAt


const moveCharacterForward = (str) => 
    str
    .split('') // Using the split('') method to split the input string into an array of individual characters
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharacterForward('az'))