/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 2:
    Write a JavaScript program to get the extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
/*
    The str.lastIndexOf('.') function call finds the last occurrence of a period (.) 
    in the input string str. 
    This index represents the position of the period before the file extension.
*/

console.log(getFileExtension('website.html'));
console.log(getFileExtension('webpack.config.jsx'));