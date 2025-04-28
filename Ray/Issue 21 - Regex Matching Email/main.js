// Exercise 8: Matching Email Address Format
// Objective: Match a basic email address format like example@domain.com.

// Instructions:

// Write a regular expression to match the structure of an email address.
// Test your regex with the string "test@example.com" and ensure it returns true.


let regex = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
let str = "test@example.com";
let outcome = regex.test(str);
console.log(outcome);