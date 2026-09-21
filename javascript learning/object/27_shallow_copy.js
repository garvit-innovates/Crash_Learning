// Q27. Create an object named user with name: "Garvit" and age: 21.
// Create a shallow copy using the spread operator (...).
// Change the name in the copy to "Rahul" and print both objects.

let user = {
    name: "Garvit",
    age: 21
};

let copy = { ...user };

copy.name = "Rahul";

console.log(user);
console.log(copy);