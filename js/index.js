const barsOpen = document.querySelector('#bars-open');
const barsClose = document.querySelector('#bars-close');
const menu = document.querySelector('#menu');

barsOpen.addEventListener('click', () => {
    menu.classList.add('drop-down-open');
})

barsClose.addEventListener('click', () => {
    menu.classList.remove('drop-down-open');
})

menu.addEventListener('click', () => {
    menu.classList.remove('drop-down-open');
})