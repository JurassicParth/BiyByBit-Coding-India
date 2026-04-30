document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Validation
    if (username.length < 3) {
        message.style.color = "red";
        message.textContent = "Username must be at least 3 characters";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Enter a valid email";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match";
        return;
    }

    // Success (demo)
    message.style.color = "green";
    message.textContent = "Account created successfully (demo)";

    // Reset form
    document.getElementById("signupForm").reset();
});
