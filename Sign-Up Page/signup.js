const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const togglePassword = document.getElementById("togglePassword");

// Password strength logic
password.addEventListener("input", () => {
    const val = password.value;
    let strength = 0;

    if (val.length >= 6) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[0-9]/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;

    if (strength === 1) {
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
        strengthText.textContent = "Weak";
    } else if (strength === 2) {
        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
        strengthText.textContent = "Medium";
    } else if (strength === 3) {
        strengthBar.style.width = "75%";
        strengthBar.style.background = "blue";
        strengthText.textContent = "Strong";
    } else if (strength === 4) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        strengthText.textContent = "Very Strong";
    } else {
        strengthBar.style.width = "0%";
        strengthText.textContent = "";
    }
});

// Show/Hide password
togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    togglePassword.innerHTML =
        type === "password"
            ? '<i class="fa fa-eye"></i>'
            : '<i class="fa fa-eye-slash"></i>';
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password.value !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match";
        return;
    }

    message.style.color = "green";
    message.textContent = "Account created (demo)";
});
