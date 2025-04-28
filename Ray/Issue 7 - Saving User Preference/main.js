// Description:
// Create an application where users can choose their preferred font size (small, medium, or large). The chosen font size should persist even after the page reloads using localStorage.

// Requirements:
// Create a dropdown menu to select a font size (small, medium, large).
// Update the font size of the text on the page based on the user's selection.
// Use localStorage to save the font size choice, so it persists after a page reload.

// Bonus: Add a message to the page that says “Font size saved!” whenever the user changes the font size.

// Stretch Goal:
// Add a button that lets you remove the setting from localStorage. 


function saveFont() {
    let font = document.getElementById('font').value;
    localStorage.setItem('userFont', font);
    displayFontMessage();
}

function displayFontMessage() {
    let savedFont = localStorage.getItem('userFont')
    if (savedFont) {
        document.getElementById('fontMessage').textContent = `Hello, ${savedFont} font size saved!`;
    } else {
        document.getElementById('fontMessage').textContent = '';
    }
}

// Bonus: Add a message to the page that says “Font size saved!” whenever the user changes the font size.
function displayFont() {

    let fontChoice = document.querySelectorAll('p');
    fontChoice.forEach(p => {
        p.style.fontSize = localStorage.getItem('userFont');
    })

}

window.onload = displayFont();

// Stretch Goal:
// Add a button that lets you remove the setting from localStorage. 

function clearLocalStorage() {
    let clearStorage = localStorage.clear();
    if (localStorage !== null) {
        clearStorage
    }
}










// function saveName() {
//     let name = document.getElementById('name').value;
//     localStorage.setItem('userName', name);
//     displayGreeting();
// }

// function displayGreeting() {
//     let savedName = localStorage.getItem('userName');
//     if (savedName) {
//         document.getElementById('greeting').textContent = `Hello, ${savedName}`;
//     } else {
//         document.getElementById('greeting').textContent = '';
//     }
// }

// window.onload = displayGreeting();