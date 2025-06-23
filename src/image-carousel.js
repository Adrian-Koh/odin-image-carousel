class ImageCarousel {
    constructor(slideContainerSelector, imageDotsSelector) {
        this.slideContainer = document.querySelector(slideContainerSelector);
        this.slides = this.slideContainer.children;

        const navigationDotsContainer = document.querySelector(imageDotsSelector);
        this.dots = [];
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.id = 'unselected';
            navigationDotsContainer.appendChild(dot);
            this.dots.push(dot);
        }

        this.currentIndex = 0;
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
                continue;
            }
            slide.style.display = 'none';
        }
        this.currentIndex = index;
        this.highlightDot();
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

    highlightDot() {
        for (let i = 0; i < this.dots.length; i++) {
            const dot = this.dots[i];
            if (this.currentIndex === i) {
                dot.id = 'selected';
                continue;
            }
            dot.id = 'unselected';
        }
    }

    updateHighlightedDot(clickedDot) {
        this.currentIndex = this.dots.indexOf(clickedDot);
        this.displaySlide();
    }
}

export {ImageCarousel}