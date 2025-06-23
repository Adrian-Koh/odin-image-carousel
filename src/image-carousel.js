import { ImageDots } from "./image-dots";

class ImageCarousel {
    constructor(slideContainerSelector, imageDots) {
        this.slideContainer = document.querySelector(slideContainerSelector);
        this.slides = this.slideContainer.children;
        this.currentIndex = 0;
        this.imageDots = imageDots;
        this.displaySlide();
        setInterval(this.nextSlide.bind(this), 5000);
    }

    displaySlide(index = -1) {
        if (index === -1)
            index = this.currentIndex;

        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            if (index === i) {
                slide.style.display = 'block';
                this.imageDots.highlightDot(i);
                continue;
            }
            slide.style.display = 'none';
        }
    }

    nextSlide() {
        this.currentIndex += 1;
        if (this.currentIndex > this.slides.length - 1) {
            this.currentIndex = 0;
        }
        this.displaySlide();
    }

    previousSlide() {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.slides.length - 1;
        }
        this.displaySlide();
    }
}

export {ImageCarousel}