// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}

// Función para cerrar sesión y redirigir al inicio de sesión
function logout() {
    alert("Cerrando sesión...");
    window.location.href = "index.html"; // Redirige al usuario al inicio de sesión
}
