window.onload = () => {
    let display = JSON.parse(sessionStorage.getItem('display')) || [];
    let displayItems = document.getElementById('displayItems');

    if(display.length === 0) {
        displayItems.innerHTML = "<li>You have not provided contact information yet.</li>";
    } else {
        display.forEach(info => {
            let li = document.createElement("li");
            li.textContent = `Name: ${info.name},  Email: ${info.email},  Message: ${info.message}`   
            displayItems.appendChild(li);
        });
    }
}