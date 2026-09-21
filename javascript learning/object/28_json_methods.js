// Q28. Create an object named user with name: "Garvit" and age: 21.
// Convert it into a JSON string using JSON.stringify(), then convert it back to an object using JSON.parse().
// Print both results.

let user = {
    name: "Garvit",
    age: 21
};

let jsonString = JSON.stringify(user);

console.log(jsonString);

let newUser = JSON.parse(jsonString);

console.log(newUser);