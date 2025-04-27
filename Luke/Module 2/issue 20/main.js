// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /^Start.*End/i;

function checkMatch() {
    if (regex.test(textInput.value) === true ) {
        console.log("Match was found!");
    } else {
        console.log("Match was not found!");
    }
}

checkMatch();