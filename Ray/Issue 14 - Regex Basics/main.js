// Regex Exercise 1: Basic Matching
// Objective: Match a string containing the word "hello".

// Instructions:

// Write a regular expression to check if the word "hello" exists in a given input string.
// Test your regex with the string "hello world" and ensure it returns true.

// let regex = /hello/i;
// let str = 'Hello world!';
// let outcome = str.match(regex);
// console.log(outcome);


let regex = /hello/i;
let str = 'Hello world!';
let outcome = regex.test(str);
console.log(outcome);
