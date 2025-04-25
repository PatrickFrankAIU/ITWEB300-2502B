// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /\w+/g;

function checkWords() {
    if (regex.test(textInput.value) === true ) {
        console.log("Words were found!");
    } else {
        console.log("Words were not found!");
    }
}

checkWords();