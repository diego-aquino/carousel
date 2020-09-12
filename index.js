import moveCarousel from './moveCarousel.js';

const items = document.querySelector('#items');
items.addEventListener('wheel', handleWheelMove);

function handleWheelMove({ deltaY }) {
    deltaY > 0
        ? moveCarousel(1)
        : moveCarousel(-1);
}
