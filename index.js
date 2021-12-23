const button = document.querySelector('.enter');
const overlay = document.querySelector('.overlay');

button.addEventListener('click', () => {
    overlay.classList.add('hide');
    overlay.addEventListener('transitionend', (event) => {
        if (event.target === overlay) {
            document.body.classList.add('scroll');
        }
    });
});