// Q18. Create an array of 5 numbers and calculate the sum of all numbers using reduce().

let nums = [1,2,3,4,5,6,5];
let sum = nums.reduce((total, num) => {
    return total + num;
}, 1);

console.log(sum);