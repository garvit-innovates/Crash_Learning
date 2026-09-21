// Q16. Create an array of 6 numbers and check whether at least one number is greater than 50 using some().

let nums = [20,60,50,80,33,62];

let num = nums.some((num)=>{
    return num > 50
});

console.log(num);