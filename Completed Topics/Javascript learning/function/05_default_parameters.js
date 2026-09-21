// Q5. Create a function named greet with a default parameter name = "Guest".
// Call it once without an argument and once with "Garvit".

function greet(name = "Guest"){
    console.log(name);
}
greet()
greet("garvit")