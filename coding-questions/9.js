/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 9:
    Given two values, write a javascript program to find out
    which one is nearest to 100
*/

const closestTo100 = (a,b) => (100-a) < (100-b) ? a : b;
console.log(closestTo100(20,30));
