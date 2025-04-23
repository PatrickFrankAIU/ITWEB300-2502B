const sizeSelect = document.getElementById("size");
const smallSelect = document.getElementById("small");
const mediumSelect = document.getElementById("medium");
const largeSelect = document.getElementById("large");
const display = document.querySelectorAll("p");

function changeFontSize() {

    const selectedSize = sizeSelect.value;
    document.body.style.fontSize = selectedSize;
    localStorage.setItem("fontSize", selectedSize);
    document.getElementById("messageOutput").innerText = "Font size saved!"
}


sizeSelect.addEventListener("change", changeFontSize);