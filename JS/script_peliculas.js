// Menú de hamburguesa
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Funcionalidad de arrastre para las secciones
const secciones = document.querySelectorAll('.contenedor-recomendaciones');
secciones.forEach(seccion => {
    let isDragging = false;
    let startX, scrollLeft;

    seccion.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - seccion.offsetLeft;
        scrollLeft = seccion.scrollLeft;
        seccion.style.cursor = 'grabbing';
    });

    seccion.addEventListener('mouseleave', () => {
        isDragging = false;
        seccion.style.cursor = 'grab';
    });

    seccion.addEventListener('mouseup', () => {
        isDragging = false;
        seccion.style.cursor = 'grab';
    });

    seccion.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - seccion.offsetLeft;
        const walk = (x - startX) * 2;
        seccion.scrollLeft = scrollLeft - walk;
    });

    // Soporte para dispositivos táctiles
    seccion.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - seccion.offsetLeft;
        scrollLeft = seccion.scrollLeft;
    });

    seccion.addEventListener('touchend', () => {
        isDragging = false;
    });

    seccion.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - seccion.offsetLeft;
        const walk = (x - startX) * 2;
        seccion.scrollLeft = scrollLeft - walk;
    });
});

// Redirección al hacer clic en el botón de perfil
const btnMessage = document.getElementById('btn-message');
btnMessage.addEventListener('click', () => {
    window.location.href = 'perfil.html'; // Redirige a perfil.html
});

// Redirección al hacer clic en el nombre "UNIMIX"
const projectTitle = document.querySelector('.button-title');
projectTitle.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a index.html
});