class ImageDots {
    constructor(count, imageDotsSelector) {
        const navigationDotsContainer = document.querySelector(imageDotsSelector);
        this.dots = [];
        this.currentIndex = 0;
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.id = 'unselected';
            navigationDotsContainer.appendChild(dot);
            this.dots.push(dot);
        }
    }

    highlightDot(index) {
        this.currentIndex = index;
        for (let i = 0; i < this.dots.length; i++) {
            const dot = this.dots[i];
            if (index === i) {
                dot.id = 'selected';
                continue;
            }
            dot.id = 'unselected';
        }
    }

    updateHighlightedDot(clickedDot) {
        const index = this.dots.indexOf(clickedDot);
        this.highlightDot(index);
    }
}

export {ImageDots};