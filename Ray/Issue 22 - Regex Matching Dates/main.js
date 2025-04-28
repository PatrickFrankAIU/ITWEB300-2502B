// Exercise 9: Matching Dates
// Objective: Match dates in the format MM/DD/YYYY.

// Instructions:

// Write a regular expression to match dates in the MM/DD/YYYY format.
// Test your regex with the string "12/25/2025" and ensure it returns true.


let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
let str = "12/25/2025";
let outcome = regex.test(str);
console.log(outcome);