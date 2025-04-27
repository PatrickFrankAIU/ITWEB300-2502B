// input variable
const textInput = document.getElementById("textInput");

// regex
const regex = /\d{2}\/\d{2}\/\d{4}/;

function checkDate() {
    if (regex.test(textInput.value) === true ) {
        console.log("Date is valid!");
    } else {
        console.log("Date is invalid!");
    }
}

checkDate();