// Q12. Create a function named sum that accepts any number of arguments
// using rest parameters (...numbers).
// Return the total sum of all numbers.
// Call it with 10, 20, 30, 40 and print the result.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30, 40));