// Basic Array Loop

// Using the array below, write a loop (no built-in Math.max/Math.min) to find the largest number, the smallest number, and the average.

let nums = [12, 45, 3, 67,0,-6, 21, 8, 99, 34, 5, 76];
 
let big = nums[0];
let small = nums[0];
let total =0;

for(let i = 0; i<nums.length; i++){
    total = total+nums[i];
    if(big<nums[i]){
        big = nums[i];
    }
    if(small>nums[i]){
        small=nums[i];
    }
}

console.log(`biggest number in array is ${big}`)
console.log(`smallest number in array is ${small}`)
console.log(`Average is :`, total/nums.length)



