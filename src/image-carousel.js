class ImageCarousel {
    constructor(slideContainerSelector) {
        this.slideContainer = document.querySelector(slideContainerSelector);
        this.slides = this.slideContainer.children;
        this.currentIndex = 0;
        this.displaySlide();
    }

    displaySlide() {
        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            if (this.currentIndex === i) {
                slide.style.display = 'block';
                continue;
            }
            slide.style.display = 'none';
        }
    }
}