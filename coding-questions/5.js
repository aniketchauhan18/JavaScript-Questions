/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 5:
    Write a javascript program to create a new string adding "New!" in
    front of a given string. If the string already begins with "New!" already
    then return the original string.
*/

const addNew = (str) => 
    str.indexOf('New!') || str.indexOf('New') <= str.length ? str : `New! ${str}`;

console.log(addNew("New offers"));