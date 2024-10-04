document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation checks
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    // Simulate successful signup
    alert("Signup successful! Welcome to Khadibv, " + username + ".");

    // Redirect to login page or homepage
    window.location.href = 'login.html';
});
