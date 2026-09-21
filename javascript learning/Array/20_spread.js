// Q20. Create two arrays of numbers and combine them into a single array using the spread operator (...).

let num1 = [0,1,2,3,4];
let num2 = [5,6,7,8,9];

let array = [...num1,...num2];
console.log(array);