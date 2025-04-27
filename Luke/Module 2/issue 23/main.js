// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /(^\d{3})-(\d{3})-(\d{4}$)/;

function checkGroups() {
    if (regex.test(textInput.value) === true ) {
        console.log("Match was found!");
    } else {
        console.log("Match was not found!");
    }
}

checkGroups();