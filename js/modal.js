// Modal for work cards
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.getElementById('modalTitle').textContent = card.dataset.title;
        document.getElementById('modalText').textContent = card.dataset.text;
        modal.classList.add('open');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
});
