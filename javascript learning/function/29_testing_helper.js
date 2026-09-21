// Q29. Create a reusable function named isValidStatus that accepts a status.
// Return true if the status is "passed" or "failed", otherwise return false.
// Test it with "passed", "failed", and "pending".

function isValidStatus(status) {
    return status === "passed" || status === "failed";
}

console.log(isValidStatus("passed"));  // true
console.log(isValidStatus("failed"));  // true
console.log(isValidStatus("pending")); // false

