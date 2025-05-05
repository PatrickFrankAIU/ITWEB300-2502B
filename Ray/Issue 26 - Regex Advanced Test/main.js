// Description:
// This exercise presents a complex string that needs to be checked to ensure that it meets several criteria.

// Submitted String:
// let str = "John, a software engineer, is working on a project related to the Apollo mission. Mary, a designer, has been researching lunar habitats for the project.";

// Requirements:
// Create JavaScript regex patterns using the test() method to check if the string meets each of the criteria listed below.

// Test Criteria:

// Contains at least 2 proper names (words that start with a capital letter followed by lowercase letters)
// Contains exactly 2 profession titles (Valid answers: engineer, designer, developer, architect.) (you can add more if you wish)
// Contains at least 1 space-related term (Valid answers: Apollo, lunar, space, NASA.) (you can add more if you wish)
// Contains at least 3 instances of the word "a" as a standalone word (not part of another word)
// Contains at least 2 instances of the word "project"
// Instructions:

// For each requirement above, create a separate regex pattern and use the test() method to check it
// Print the result of each test (true or false) with appropriate explanation (for example, "1: true")

// Bonus: Count how many of the 5 requirements are met
// Example Solution Structure:

// // Test string
// let str = "John, a software engineer, is working on a project related to the Apollo mission. Mary, a designer, has been researching lunar habitats for the project.";

// // Requirement 1: Check for proper names
// let properNamesPattern = /Your regex here/;
// console.log("Contains proper names:", properNamesPattern.test(str));

// // Continue with the remaining requirements...

// // Bonus: Count total requirements met
// let requirementsMet = 0;
// // Add your counting logic here
// console.log(`Total requirements met: ${requirementsMet}/5`);
// Hints:

// Remember to use \b for word boundaries when checking for whole words
// Pay attention to case sensitivity for proper names
// Think about how to match standalone words vs parts of words


let str = "John, a software engineer, is working on a project related to the Apollo mission. Mary, a designer, has been researching lunar habitats for the project.";
let count = [];

let properNamesPattern = str.match(/\b[A-Z][a-z]+\b/g)?.length >= 2;
if (properNamesPattern) {
    count.push(properNamesPattern)
};
let properNamesPattern1 = (str.match(/\b(engineer|designer|developer|architect)\b/g) || []).length === 2;
if (properNamesPattern1) {
    count.push(properNamesPattern1)
};
let properNamesPattern2 = (str.match(/\b(Apollo|lunar|space|NASA)\b/i) !== null);
if (properNamesPattern2) {
    count.push(properNamesPattern2)
};
let properNamesPattern3 = (str.match(/\ba\b/g) || []).length >= 3;
if (properNamesPattern3) {
    count.push(properNamesPattern3)
};
let properNamesPattern4 = (str.match(/\bproject\b/g) || []).length >= 2;
if (properNamesPattern4) {
    count.push(properNamesPattern4)
};

console.log("Contains proper names:", properNamesPattern);
console.log("Contains proper names:", properNamesPattern1);
console.log("Contains proper names:", properNamesPattern2);
console.log("Contains proper names:", properNamesPattern);
console.log("Contains proper names:", properNamesPattern4);

console.log(count.length);






