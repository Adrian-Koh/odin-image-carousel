import "./styles.css";
import { ImageCarousel } from "./image-carousel";

const imageCarousel = new ImageCarousel('#slide-container', '#nav-dots');

document.querySelector('#left-arrow').addEventListener('click', () => {
    imageCarousel.previousSlide();
});

document.querySelector('#right-arrow').addEventListener('click', () => {
    imageCarousel.nextSlide();
});

const dots = document.querySelectorAll('.dot');
for (const dot of dots) {
    dot.addEventListener('click', (event) => {
        imageCarousel.updateHighlightedDot(event.target);
    });
}