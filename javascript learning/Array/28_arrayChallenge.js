// Q28. Create an array of numbers and find the sum of all even numbers using filter() and reduce().

let nums = [1,2,3,4,5,6,7,8,9]

let even = nums.filter((num)=>{
    return num % 2 === 0;
});

console.log(`even array : ${even}`);

let sum = even.reduce((total,num)=>{
    return total + num;

},0);

console.log(`total of even array : ${sum}`);
