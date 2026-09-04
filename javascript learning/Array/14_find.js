// Q14. Create an array of 6 numbers and find the first number greater than 30 using find().

let nums = [23,20,33,9,52,55];

let num = nums.find((num)=>{
    return num > 30
});

console.log(num)