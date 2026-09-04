// Q15. Create an array of 6 numbers and find the index of the first number greater than 30 using findIndex().

let nums = [23, 20, 33, 9, 52, 55];

let num = nums.findIndex((num) => {
    return num > 30;
});

console.log(num);


