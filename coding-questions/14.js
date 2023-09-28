/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 14:
    Write a JavaScript program to get the largest even number from an array of intergers
*/

const largestNum = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestNum([1,3,5,6,6,77,7,]));
console.log(largestNum([12,33,32,4,345,46]));