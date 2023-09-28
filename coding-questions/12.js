/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 12:
    Write a JavaScript program to find out number of even values
    up to a given number
*/

const countEventNumber = (arr) => 
    arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i++){
        returnArray.push(i);
    }
    return returnArray;
}

console.log(countEventNumber(createArrayOfNumbers(8)));