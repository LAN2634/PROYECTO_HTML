// Funcionalidad de favoritos
const favoriteBtn = document.getElementById('favoriteBtn');
const stars = document.querySelectorAll('.star');

favoriteBtn.addEventListener('change', function () {
    if (this.checked) {
        console.log("Añadido a favoritos");
    } else {
        console.log("Eliminado de favoritos");
    }
});

// Star rating
stars.forEach(star => {
    star.addEventListener('click', function () {
        const rating = this.getAttribute('data-rating');

        // Update star display
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });

        console.log(`Calificación: ${rating} estrellas`);
        // Aquí puedes enviar la calificación al servidor
    });

    // Hover effect
    star.addEventListener('mouseover', function () {
        const rating = this.getAttribute('data-rating');
        stars.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#ffcc00';
            }
        });
    });

    star.addEventListener('mouseout', function () {
        stars.forEach(s => {
            // Only reset color if not active (selected)
            if (!s.classList.contains('active')) {
                s.style.color = '#666';
            }
        });
    });
});