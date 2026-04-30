const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide password
togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    togglePassword.innerHTML =
        type === "password"
            ? '<i class="fa fa-eye"></i>'
            : '<i class="fa fa-eye-slash"></i>';
});

// Login validation (demo)
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const passwordVal = password.value;
    const message = document.getElementById("message");

    if (username === "admin" && passwordVal === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
});
