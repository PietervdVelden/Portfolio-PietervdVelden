// Carousel functionality
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const idx = dot.getAttribute('data-index');
        images.forEach((img, i) => {
            img.classList.toggle('active', i == idx);
        });
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});
