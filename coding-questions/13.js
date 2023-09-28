/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 12:
    Write a JavaScript program to check whether a given array of integers is sorted in ascending order.
*/

const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) return false
    }
    return true;
}

console.log(isAscending([1,2,3,4,5,6,7,8]))
console.log(isAscending([1,2,10,5,5,6,7,8]))
console.log(isAscending([33,32,3,4,5,6,7,8]))