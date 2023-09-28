/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 11:
    Write a JavaScript program to find out the number of even digits
    in an array of integers.
*/

const countEvenNumbers = (arr) => 
    arr.filter(num => num % 2 === 0).length;

console.log(countEvenNumbers([1,2,3,4,67,5,7,78,8]));