// Q23. Create a recursive function named countdown that accepts a number.
// Print the number and recursively decrease it by 1.
// Stop when the number reaches 0.
// Call countdown(5).

function countdown(num) {
    if (num === 0) {
        return;
    }

    console.log(num);
    countdown(num - 1);
}

countdown(10);