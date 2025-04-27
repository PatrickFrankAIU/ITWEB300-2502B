// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkEmail() {
    if (regex.test(textInput.value) === true ) {
        console.log("Email is valid!");
    } else {
        console.log("Email is invalid!");
    }
}

checkEmail();