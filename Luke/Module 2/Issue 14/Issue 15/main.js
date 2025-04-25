// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /\d/;

function checkDigits() {
    if (regex.test(textInput.value) === true ) {
        console.log("digits were found!");
    } else {
        console.log("digits were not found!");
    }
}

checkDigits();