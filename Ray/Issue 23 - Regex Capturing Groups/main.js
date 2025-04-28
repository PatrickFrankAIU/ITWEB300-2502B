// Exercise 10: Capturing Groups
// Objective: Capture area codes from phone numbers.

// Instructions:

// Write a regular expression using capturing groups to extract the area code from phone numbers.
// Test your regex with the string "123-456-7890" and ensure it extracts the area code "123".


let regex = /^(\d{3})-\d{3}-\d{4}$/;
let str = "123-456-7890";
let outcome = regex.test(str);
console.log(outcome);