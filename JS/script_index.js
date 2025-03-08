// Menú de hamburguesa
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

// Abrir o cerrar el menú al hacer clic en el ícono
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    menu.classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Carrusel automático
const carruselInner = document.querySelector('.carrusel-inner');
const items = document.querySelectorAll('.carrusel-item');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    carruselInner.style.transform = `translateX(-${currentIndex * 140}px)`; // Desplazamiento de 140px por imagen
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos