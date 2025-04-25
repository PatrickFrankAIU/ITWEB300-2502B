// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /\D/;

function checkNonDigits() {
    if (regex.test(textInput.value) === true ) {
        console.log("non-digits were found!");
    } else {
        console.log("non-digits were not found!");
    }
}

checkNonDigits();