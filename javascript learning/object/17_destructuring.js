// Q17. Create an object named user with name: "Garvit" and age: 21.
// Use object destructuring to store name and age in separate variables, then print both.


let user = {
    name : "Garvit",
    age : 21
};

let {name, age } = user;

console.log(name);
console.log(age);