let hammie = document.querySelector('.hamburger');
let leftSide = document.querySelector('.left-side-view');
let exit = document.querySelector('.X');
const body = document.querySelector('body');

hammie.addEventListener('click', () => {
    leftSide.style.display = 'block';
    leftSide.style.animation = 'moveLeftToRight 1s';
})
exit.addEventListener('click', () => {
    leftSide.style.display = 'none';
})
