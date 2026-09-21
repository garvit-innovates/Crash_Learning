// Q17. Create an array of 6 numbers and check whether every number is greater than 10 using every().

let nums = [134,44,6531,36,3,5];

let num = nums.every((num)=>{
    return num>10
});

console.log(num)