/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 9 :
    Write a javascript program to check a given string contains 2 to 4 occurences
    of a specified character.
*/

const countCharacter = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const contains2to4 = (str, char) =>
    countCharacter(str,char) >=2 && countCharacter(str, char) <=4;

console.log(contains2to4('oooh', 'o'));
console.log(countCharacter('ooo', 'o'));
console.log(contains2to4('ooohhhh', 'h'));