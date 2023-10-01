/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 15:
    Write a JavaScript program to replace the first digit in a string (should contain at least digit) with
    $ character.
*/
const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$');

console.log(replaceFirstDigit('Abscds222kk'))
console.log(replaceFirstDigit('A1bscds22kk'))
console.log(replaceFirstDigit('A7bscds222kk'))