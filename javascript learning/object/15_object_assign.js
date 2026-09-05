// Q15. Create two objects:
// user = { name: "Garvit" }
// details = { age: 21 }
// Use Object.assign() to combine them into one object and print it.

let user = {
    name : "garvit"
};

let details = {
    age : 21
};

let combined = Object.assign({}, user, details);

console.log(combined);