import "./styles.css";
import { ImageCarousel } from "./image-carousel";
import { ImageDots } from "./image-dots";

const imageDots = new ImageDots(document.querySelector('#slide-container').children.length, '#nav-dots');
const imageCarousel = new ImageCarousel('#slide-container', imageDots);

document.querySelector('#left-arrow').addEventListener('click', () => {
    imageCarousel.previousSlide();
});

document.querySelector('#right-arrow').addEventListener('click', () => {
    imageCarousel.nextSlide();
});

const dots = document.querySelectorAll('.dot');
for (const dot of dots) {
    dot.addEventListener('click', (event) => {
        imageDots.updateHighlightedDot(event.target);
        imageCarousel.displaySlide(imageDots.currentIndex);
    });
}