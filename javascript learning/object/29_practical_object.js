// Q29. Create a user object with name, age, and isTester properties.
// Print the user's name.
// Check whether isTester exists using Object.hasOwn().
// Finally, print all property names using Object.keys().


let user = {
    name: "Garvit",
    age: 21,
    isTester: true
};

console.log(user.name);

console.log(Object.hasOwn(user, "isTester"));

console.log(Object.keys(user));