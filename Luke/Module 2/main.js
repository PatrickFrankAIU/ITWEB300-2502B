// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /hello/;

function checkHello() {
    if (regex.test(textInput.value) === true ) {
        console.log("hello was found!");
    } else {
        console.log("hello was not found!");
    }
}

checkHello();