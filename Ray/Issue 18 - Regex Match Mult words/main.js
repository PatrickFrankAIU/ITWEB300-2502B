// Regex Exercise 5: Matching Multiple Words
// Objective: Match a sentence containing multiple words.

// Instructions:

// Write a regular expression using \w+ to match multiple words in a sentence.
// Test your regex with the string "Hello world from RegEx!" and ensure it matches the words correctly.

let regex = /\w+/g;
let str = "Hello world from RegEx!";
let outcome = regex.test(str);
console.log(outcome);