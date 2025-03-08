 // Manejar el envío del formulario de login
 document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Inicio de sesión exitoso');
    window.location.href = 'index.html'; 
});

// Redirigir al registro
document.getElementById('registroLink').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'registro.html'; 
});