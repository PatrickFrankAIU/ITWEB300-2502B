const nameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const messageForm = document.getElementById("message");
const formForm = document.getElementById("formInput")

function storeData() {
    nameInput = nameForm.value;
    emailInput = emailForm.value;
    messageInput = messageForm.value;

    sessionStorage.setItem("name", nameInput);
    sessionStorage.setItem("email", emailInput);
    sessionStorage.setItem("message", messageInput);

    location.href = "display.html";
}


function showData() {
    document.getElementById("nameOutput").innerText = sessionStorage.getItem("name");
    document.getElementById("emailOutput").innerText = sessionStorage.getItem("email");
    document.getElementById("messageOutput").innerText = sessionStorage.getItem("message");
        if (!sessionStorage.getItem("name")) {
            document.getElementById("nameOutput").innerText = "No contact information found.";
        } else if 
        (!sessionStorage.getItem("email")) {
            document.getElementById("emailOutput").innerText = "No contact information found.";
        } else if
        (!sessionStorage.getItem("message")) {
            document.getElementById("messageOutput").innerText = "No contact information found.";
        }
}



document.getElementById("sendInfo").addEventListener("click", storeData);
document.addEventListener('DOMContentLoaded', showData());
