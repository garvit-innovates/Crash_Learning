// Q30. Create a function named countVowels that accepts a string.
// Count and return the total number of vowels (a, e, i, o, u).
// Call it with "javascript" and print the result.

function countVowels(str) {
    let count = 0;

    for (let char of str) {
        if ("aeiou".includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("javascript"));
