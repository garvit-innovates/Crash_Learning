// Q25. Create an array of key-value pairs:
// [["name", "Garvit"], ["age", 21]]
// Use Object.fromEntries() to convert it into an object and print it.

let user = [["name" , "garvit"], ["age", 21]];

console.log(Object.fromEntries(user))