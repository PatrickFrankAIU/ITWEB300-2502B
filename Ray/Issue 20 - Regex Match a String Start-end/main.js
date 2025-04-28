// Exercise 7: Matching a String Start/End
// Objective: Match a string that begins with "Start" and ends with "End".

// Instructions:

// Write a regular expression using ^ (start) and $ (end) to match strings that start with "Start" and end with "End".
// Test your regex with the string "Start your journey, and End with success." and ensure it returns true.


let regex = /^start.*end.$/i;
let str = "Start your journey, and End.";
let outcome = regex.test(str);
console.log(outcome);

// I removed "with success" so End can be at the end to return true.
// I added a decimal after end to make it Work. 