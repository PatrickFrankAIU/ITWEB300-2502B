// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /a{3}/ig;

function checkOccurance() {
    if (regex.test(textInput.value) === true ) {
        console.log("Occurances were found!");
    } else {
        console.log("Occurances were not found!");
    }
}

checkOccurance();