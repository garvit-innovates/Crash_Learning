// Q24. Create two objects:
// user = { name: "Garvit", age: 21 }
// extra = { city: "Delhi" }
// Use Object.assign() to add the extra properties to user.
// Print the final object.

let user = {
    name : "Garvit",
    age : 21
};
let extra = { city : "delhi" };


Object.assign(user , extra);



console.log(user)