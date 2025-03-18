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
const projectTitle = document.querySelector('.project-title');
projectTitle.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a index.html
});
// Variables para almacenar las selecciones
let selectedOptions = [];
let selectedPaymentMethod = null;

// Función para abrir la modal de categorías
function openModal() {
    const modalBackground = document.getElementById('modal-background');
    modalBackground.style.display = 'flex';
}

// Función para cerrar la modal de categorías
function closeModal() {
    const modalBackground = document.getElementById('modal-background');
    modalBackground.style.display = 'none';
}

// Función para seleccionar una opción
function selectOption(option) {
    option.classList.toggle('selected');
    if (option.classList.contains('selected')) {
        selectedOptions.push(option.textContent);
    } else {
        selectedOptions = selectedOptions.filter(item => item !== option.textContent);
    }
}

// Función para confirmar la selección y mostrar la animación de carga
function confirmSelection() {
    if (selectedOptions.length === 0) {
        alert('Por favor, selecciona al menos una categoría.');
        return;
    }
    closeModal();
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    // Esperar 5 segundos antes de mostrar la modal de pago
    setTimeout(() => {
        loader.style.display = 'none';
        const paymentModal = document.getElementById('payment-modal');
        paymentModal.style.display = 'flex';
    }, 5000); // 5000 ms = 5 segundos
}

// Función para seleccionar un método de pago
function selectPaymentMethod(method) {
    if (selectedPaymentMethod) {
        selectedPaymentMethod.classList.remove('selected');
    }
    method.classList.add('selected');
    selectedPaymentMethod = method.textContent;
}

// Función para cerrar la modal de pago
function closePaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    paymentModal.style.display = 'none';
}

// Función para finalizar el pago
function finalizePayment() {
    if (!selectedPaymentMethod) {
        alert('Por favor, selecciona un método de pago.');
        return;
    }
    alert(`Has seleccionado: ${selectedOptions.join(', ')}\nMétodo de pago: ${selectedPaymentMethod}`);
    closePaymentModal();
}