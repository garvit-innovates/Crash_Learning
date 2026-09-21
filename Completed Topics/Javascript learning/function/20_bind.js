// Q20. Create a function named greet that uses `this.name`.
// Create an object with name = "Garvit".
// Use `bind()` to permanently bind the function to the object.
// Store the bound function in a variable and call it.

function greet(){
    console.log(this.name);
};

let user = {
    name : "Garvit Chugh"
};


let boundgreet = greet.bind(user);

boundgreet()