
const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const successMessage = document.getElementById("successMessage");

function showError(input, errorId, message) {
    document.getElementById(errorId).textContent = message;
    input.classList.toggle("invalid", message !== "");
    input.classList.toggle("valid", message === "");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent = "";

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameError = name.length < 2
        ? "Please enter your full name."
        : "";

    const emailError = !emailPattern.test(email)
        ? "Please enter a valid email address."
        : "";

    const passwordError = password.length < 8
        ? "Password must be at least 8 characters."
        : "";

    const confirmError = confirmPassword !== password || !confirmPassword
        ? "Passwords do not match."
        : "";

    showError(nameInput, "nameError", nameError);
    showError(emailInput, "emailError", emailError);
    showError(passwordInput, "passwordError", passwordError);
    showError(confirmInput, "confirmError", confirmError);

    isValid = !nameError && !emailError &&
              !passwordError && !confirmError;

    if (isValid) {
        successMessage.textContent =
            "Form validated successfully! Great work.";

        form.reset();

        [nameInput, emailInput, passwordInput, confirmInput]
            .forEach(function (input) {
                input.classList.remove("valid", "invalid");
            });
    }
});
