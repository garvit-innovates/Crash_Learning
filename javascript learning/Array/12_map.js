// Q12. Create an array of 5 numbers and create a new array containing double of each number using map().

let nums = [1,2,3,4,5];

let num1 = nums.map((num) => {
    return num * 2 ;
});

let num2 = nums.forEach((num) => {
    return num * 2 ;
});

console.log(nums);
console.log(num1);
console.log(num2);