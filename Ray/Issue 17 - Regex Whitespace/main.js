// Regex Exercise 4: Matching Whitespace Characters
// Objective: Match any whitespace character (spaces, tabs, newlines).

// Instructions:

// Write a regular expression using \s to match whitespace characters.
// Test your regex with the string "Hello World!" and ensure it returns true.


let regex = /\s/g;
let str = "Hello World";
let outcome = regex.test(str);
console.log(outcome);
