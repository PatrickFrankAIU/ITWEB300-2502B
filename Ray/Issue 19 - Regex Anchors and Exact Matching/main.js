// Exercise 6: Matching a Specific Number of Occurrences
// Objective: Match a character repeated exactly 3 times.

// Instructions:

// Write a regular expression using {3} to match a character repeated exactly 3 times.
// Test your regex with the string "aaabbb" and ensure it returns true.

let regex = /a|b{3}/;
let str = "aaabbb";
let outcome = regex.test(str);
console.log(outcome);