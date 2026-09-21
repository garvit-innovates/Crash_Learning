// Q22. Create an object named user with name: "Garvit" and age: 21.
// Use Object.freeze() on the object, then try to change age to 22.
// Print the object.

let user = {
    name : "Garvit",
    age : 21
};

Object.freeze(user);

user.age = 22 ;

console.log(user)