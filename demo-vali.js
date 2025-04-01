document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("usrnm").value;
        const password = document.getElementById("pswrd").value;

        const validUsername = "demo";
        const validPassword = "1234";

        if (username === validUsername && password === validPassword) {
            alert("Login successful! Redirecting to home page...");
            window.location.href = "hp/center.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});