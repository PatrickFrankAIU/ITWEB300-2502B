
// Validate the form fields when the user tries to submit
// Show error messages for invalid fields
// Prevent form submission if validation fails
// Show a success message if all validations pass
// Fields to validate: username (min 3 chars) and password (min 6 chars)

// When the form is submitted with an invalid username (less than 3 characters), the username error message appears
// When the form is submitted with an invalid password (less than 6 characters), the password error message appears
// When all fields are valid and the form is submitted, the success message appears
// The form should not actually submit (page should not reload) in any case

$(document).ready(function () {

    $("button").click(function (submit) {
        submit.preventDefault();

        $("#username-error, #password-error, #success-message").hide();

        let valid = true

        if ($("#username").val() < 3 || $("#username").val() === "") {
            $("#username-error").show();
            valid = false;
        }

        if ($("#password").val() < 6 || $("#password").val() === "") {
            $("#password-error").show();
            valid = false;
        }

        if (valid) {
            $("#success-message").show();
        }

    });


});