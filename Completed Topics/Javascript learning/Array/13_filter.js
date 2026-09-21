// Q13. Create an array of 6 numbers and create a new array containing only the even numbers using filter().

let nums = [1, 2, 3, 4, 5, 6];

let evenNums = nums.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNums);