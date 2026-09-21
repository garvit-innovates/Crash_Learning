// Q20. Create an object named user with name: "Garvit", age: 21, and city: "Delhi".
// Use a for...in loop to print each property name and its value.

let user = {
    name: "Garvit",
    age: 21,
    city: "Delhi"
};

for (let key in user) {
    console.log(key, user[key]);
}