// Q13. Create a function named showUser that accepts an object
// using parameter destructuring.
// Print the user's name and age.
// Call it with { name: "Garvit", age: 25 }.    

function showUser(obj){
    let {name,age} = obj
    console.log(name);
    console.log(age);
}

showUser({ name: "Garvit", age: 25 });