// Regex Exercise 2: Matching Digits
// Objective: Match any digit in a string (0-9).

// Instructions:

// Write a regular expression using \d to match digits in a string.
// Test your regex with the string "There are 4 apples." and ensure it returns true.


let regex = /\d/g;
let str = "There are 4 apples;";
let outcome = regex.test(str);
console.log(outcome);
