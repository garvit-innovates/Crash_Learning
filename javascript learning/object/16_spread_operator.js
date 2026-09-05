// Q16. Create two objects:
// user = { name: "Garvit" }
// details = { age: 21 }
// Use the spread operator (...) to combine them into one object and print it.

let user = {
    name : "garvit"
};

let details = {
    age : 21
};

let combine = {...user, ...details};

console.log(combine)