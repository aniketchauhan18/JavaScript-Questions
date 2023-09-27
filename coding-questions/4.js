/* 
    Javascript Practice exercises for beginners
    ================================================
    Exercise 4:
    Write a javscript program to get the current date.
    Expected output : 
    mm-dd-yyyy
*/

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}-${months}-${years}`;
}

console.log(formatDate());