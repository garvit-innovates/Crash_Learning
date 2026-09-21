// Q21. Create an object named user with name: "Garvit" and age: 21.
// Use Object.hasOwn() to check whether the "age" property belongs directly to the object.

let user = {
    name : "Garvit",
    age : 21
};

console.log(Object.hasOwn(user, "age"));