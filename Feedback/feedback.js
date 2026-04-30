document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("age", document.getElementById("age").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("message", document.getElementById("message").value);

    fetch("feedback.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        const response = document.getElementById("response");

        if (data === "success") {
            response.style.color = "green";
            response.textContent = "Feedback submitted";
        } else {
            response.style.color = "red";
            response.textContent = "Error submitting feedback";
        }
    });
});
