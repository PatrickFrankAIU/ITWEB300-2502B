// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /\s/;

function checkWhiteSpace() {
    if (regex.test(textInput.value) === true ) {
        console.log("White space was found!");
    } else {
        console.log("White space was not found!");
    }
}

checkWhiteSpace();