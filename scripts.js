document.addEventListener("DOMContentLoaded", function () {
    generateCaptcha();

    // Event listeners para validación en tiempo real
    document.getElementById("username").addEventListener("input", validateUsername);
    document.getElementById("password").addEventListener("input", validatePassword);
    document.getElementById("confirmPassword").addEventListener("input", validateConfirmPassword);
    document.getElementById("captcha").addEventListener("input", validateCaptcha);


});

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

function generateCaptcha() {
    const captchaText = document.getElementById("captchaText");
    const captcha = Math.floor(1000 + Math.random() * 9000);
    captchaText.textContent = captcha;
}

function validateUsername() {
    const username = document.getElementById("username").value.trim();
    const usernameError = document.getElementById("usernameError");

    if (username.length < 4 || username.length > 12) {
        usernameError.textContent = "El usuario debe tener entre 4 y 12 caracteres.";
        return false;
    } else {
        usernameError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

function validateCaptcha() {
    const captcha = document.getElementById("captcha").value;
    const captchaText = document.getElementById("captchaText").textContent;
    const captchaError = document.getElementById("captchaError");

    if (captcha !== captchaText) {
        captchaError.textContent = "El captcha no es correcto.";
        return false;
    } else {
        captchaError.textContent = "";
        return true;
    }
}

function validateForm() {
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isCaptchaValid = validateCaptcha();

    return isUsernameValid && isPasswordValid && isConfirmPasswordValid && isCaptchaValid;
}
document.addEventListener("DOMContentLoaded", function () {
    generateCaptcha();

    // Event listeners para validación en tiempo real
    document.getElementById("username").addEventListener("input", validateUsername);
    document.getElementById("password").addEventListener("input", validatePassword);
    document.getElementById("confirmPassword").addEventListener("input", validateConfirmPassword);
    document.getElementById("captcha").addEventListener("input", validateCaptcha);

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        if (validateForm()) {
            // Llamar a la función login solo si el formulario es válido
            login();
        } else {
            alert("Por favor, completa correctamente todos los campos.");
        }
    });
});

// Datos del administrador para comparación
const adminCredentials = {
    username: "Jocelyn",
    password: "Admin123" // Contraseña de ejemplo que cumple con los requisitos
};

// Función de inicio de sesión
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Redirigir a la página de administrador
        alert("Inicio de sesión como administrador exitoso.");
        window.location.href = "admin.html";
    } else {
        // Redirigir a la página de inicio para usuarios regulares
        alert("Inicio de sesión como usuario exitoso.");
        window.location.href = "inicio.html";
    }
}

// Otras funciones de validación ya incluidas...

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

function generateCaptcha() {
    const captchaText = document.getElementById("captchaText");
    const captcha = Math.floor(1000 + Math.random() * 9000);
    captchaText.textContent = captcha;
}

// Validaciones ya implementadas...
