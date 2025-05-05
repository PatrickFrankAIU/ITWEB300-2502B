// Exercise: Contact Form with Session Storage
// Objective:
// Create a contact form that allows users to submit their name, email, and a message on the first page. On the second page, display the information that was submitted using sessionStorage.
// Instructions:
// 1. Create the Contact Form Page (contact.html)
// On the first page, create a contact form with the following fields:

// Name (input)
// Email (input)
// Message (textarea)
// A button to submit the form
// When the user submits the form:

// Check that all fields are filled out.
// Save the form data (name, email, and message) to sessionStorage.
// Redirect the user to display.html where the information will be displayed.
// Requirements:

// Use sessionStorage to store the form data.
// After saving the data, redirect the user to display.html.
// 2. Create the Display Page (display.html)
// On the second page, retrieve the form data from sessionStorage and display it on the page in a user-friendly format. The displayed data should include the name, email, and message.

// Requirements:

// Retrieve the data from sessionStorage using getItem.
// Display the name, email, and message in a readable format.
// If no data is found, display a message such as "No contact information found."

// 3. Bonus Challenge:
// Add input validation on the first page to ensure that all fields are filled out before allowing the user to submit the form.
// Enhance the display page by formatting the message in a more readable way (e.g., replacing newlines in the message with <br> tags for proper formatting).

// Submission Instructions:
// Add these files to your folder in the classroom repository
// Commit and Sync your code
// Tips:

// You can use JSON.parse() and JSON.stringify() if you prefer to store the form data as an object in sessionStorage.
// Use the browser’s Developer Tools (under the "Application" tab) to inspect sessionStorage.


function addToDisplay() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let display = JSON.parse(sessionStorage.getItem('display')) || [];

    display.push({name, email, message});
    sessionStorage.setItem('display', JSON.stringify(display));

    alert(`Your ${name}, ${email}, and ${message} were added to the Display page.`);
}