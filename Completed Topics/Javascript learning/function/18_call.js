// Q18. Create a function named greet that uses `this.name`.
// Create an object with name = "Garvit".
// Use `call()` to execute greet with that object.


function greet() {
    console.log(this.name);
}

let user = {
    name: "Garvit"
};

greet.call(user);