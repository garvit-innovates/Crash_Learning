// Q23. Create an object named user with name: "Garvit" and age: 21.
// Use Object.seal() on the object.
// Try to change age to 22 and add a city property.
// Print the object.


let user = {
    name : "Garvit",
    age : 21
};

Object.seal(user);

user.age = 22 ;
user.city = "delhi";

console.log(user)