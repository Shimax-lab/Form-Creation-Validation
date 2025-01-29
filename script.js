document.addEventListener("DOMContentLoaded", function () {
    // Select the form
    const form = document.getElementById("registration-form");

    // Select the feedback div
    const feedbackDiv = document.getElementById("form-feedback");

    // Add event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username is too short.");
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Invalid email format.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block"; // Make the feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green success message
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Show errors with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red error messages
        }
    });
});
