const items = document.querySelector('#items');
const numberOfImages = items.childElementCount;

let imageWidth = window.innerWidth;
window.addEventListener('resize', recalculateImageWidth);

function recalculateImageWidth() {
    imageWidth = window.innerWidth;
}

let currentImage = 1;

function moveCarousel(direction) {
    if (direction > 0 && currentImage < numberOfImages) {
        currentImage++;
    } else if (direction < 0 && currentImage > 1) {
        currentImage--;
    } else {
        return;
    }

    items.scrollTo(imageWidth * (currentImage - 1), 0);
}

export default moveCarousel;
