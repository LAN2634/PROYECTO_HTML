document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Verifica si el checkbox está marcado
    if (!document.getElementById('aceptoTerminos').checked) {
        alert('Debes aceptar los Términos y Condiciones para continuar.');
        event.preventDefault(); // Evita que se envíe el formulario si no está marcado
    }
});

// Habilitar/deshabilitar el botón de registro según el estado del checkbox
document.getElementById('aceptoTerminos').addEventListener('change', function() {
    document.querySelector('button[type="submit"]').disabled = !this.checked;
});
