/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 2:
    Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3
    characaters of a string and adding them together. The string length must be 3 or more,
    if not, the original string is returned.
*/

const newstring = (str) => str.length > 3 ? str.slice(0, 3) + str.slice(-3) : str;
console.log(newstring('advdvdv'));
console.log(newstring('ani'));