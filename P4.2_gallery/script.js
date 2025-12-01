// Obtener elementos del modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.modal-close');

// Añadir evento click a cada imagen de la galería
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // Obtener la imagen y el caption clickeado
        const img = item.querySelector('img');
        const caption = item.querySelector('figcaption');

        // Mostrar en el modal
        modalImg.src = img.src;
        modalCaption.textContent = caption.textContent;
        modal.classList.add('active');
    });
});

// Cerrar modal con el botón X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});