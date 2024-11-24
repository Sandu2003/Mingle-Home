// Define the admin credentials
const adminUsername = "admin";
const adminPassword = "admin123";

// Get the form and error message elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Add event listener to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match the admin credentials
    if (username === adminUsername && password === adminPassword) {
        // Redirect to the contact user page (adjust path if needed)
        window.location.href="dashbord.html"; 
        // Add .html if needed
    } else {
        // Show error message if credentials are incorrect
        errorMessage.textContent = "Invalid username or password";
    }
});
