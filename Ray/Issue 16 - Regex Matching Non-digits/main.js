// Regex Exercise 3: Matching Non-Digits
// Objective: Match anything that is not a digit.

// Instructions:

// Write a regular expression using \D to match non-digits in a string.
// Test your regex with the string "123abc" and ensure it returns true.

let regex = /\D/g;
let str = "123abc";
let outcome = regex.test(str);
// let outcome = str.match(regex);
console.log(outcome);