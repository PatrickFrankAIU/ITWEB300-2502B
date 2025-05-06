// Advanced Regular Expression Replacement Exercise

// Description:
// Work with a string and use regular expressions to replace multiple patterns.

// Task:
// You are given the following string:
// let str = "Today is sunny, tomorrow is rainy, and the day after will be cloudy.";

// You need to replace:

// The word "sunny" with "bright"
// The word "rainy" with "wet"
// The word "cloudy" with "overcast"
// However, if any of these words appear as part of another word (e.g., "rainy-day"), do not replace them. The word should only be replaced if it stands alone, surrounded by spaces or punctuation marks.

// Expected Output:
// "Today is bright, tomorrow is wet, and the day after will be overcast."

// Tip:

// Use replace()'s callback function to perform the necessary replacements.

// So here are some hints on this one:

// Create a variable to store the regex, setting it equal to str.replace()
// In the .replace() method, place the regex string in the parentheses, as the first parameter for replace()
// You'll need multiple regex conditions separated by a pipe symbol ("|")
// The second parameter for replace() will need to be a callback function (arrow or anonymous) with a parameter,

// for example: replace(/regexcode/, (match) =>{
// Within the callback you'll need IF/ELSE logic, using the callback's parameter
// Try it and see if you can work it out, and holler if you need more hints! :-)

let str = "Today is sunny, tomorrow is rainy, and the day after will be cloudy.";

let regex = str.replace(/\b(sunny|rainy|cloudy)\b/g, (newText) => {
    if (newText === "sunny") {
        return "bright";
    }
    if (newText === "rainy") {
        return "wet";
    }
    if (newText === "cloudy") {
        return "overcast";
    }
});

console.log(regex);
