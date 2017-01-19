import {clearChildren} from './helpers';

export default class Preview {
    initialize(itemsData) {
        this.resultsContainer = document.querySelector('.js-resultsContainer');
        this.lightbox = document.querySelector('.js-lightbox');
        this.previewBox = document.querySelector('.js-preview');

        this.itemsData = itemsData;

        this.resultsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.js-resultsItem')) {
                this.currentItem = parseInt(e.target.dataset.itemIndex);
                this.setPreviewItem();
                this.showLightbox();
            }
        });

        this.lightbox.addEventListener('click', (e) => {
            if (e.target.matches('.js-previewNext')) {
                this.nextItem();
            } else if (e.target.matches('.js-previewPrev')) {
                this.previousItem();
            } else {
                if (e.target.matches('.js-previewClose, .js-preview')) {
                    this.closeLightbox();
                }
            }
        });

        document.addEventListener('keydown', (event) => {
            if (!event)
                event = window.event;
            var code = event.keyCode;
            if (event.charCode && code == 0)
                code = event.charCode;
            switch (code) {
                case 37:
                    // Key left.
                    this.previousItem();
                    break;
                case 39:
                    // Key right
                    this.nextItem();
                    break;
                case 27:
                    // ESC
                    this.closeLightbox();
                    break;
            }
            event.preventDefault();
        });
    }

    previousItem() {
        if (this.currentItem > 0) {
            this.currentItem -= 1;
            this.setPreviewItem();
        }
    }

    nextItem() {
        if (this.currentItem < this.itemsData.length - 1) {
            this.currentItem += 1;
            this.setPreviewItem();
        }
    }

    closeLightbox() {
        clearChildren(this.previewBox);
        this.lightbox.classList.add('u-isHidden');
    }

    showLightbox() {
        this.lightbox.classList.remove('u-isHidden');
    }

    setPreviewItem() {
        const previewNextButton = document.querySelector('.js-previewNext');
        const previewPrevButton = document.querySelector('.js-previewPrev');

        if (this.currentItem === 0) {
            previewPrevButton.classList.add('u-isHidden');
        } else {
            previewPrevButton.classList.remove('u-isHidden');
        }

        if (this.currentItem === this.itemsData.length - 1) {
            previewNextButton.classList.add('u-isHidden');
        } else {
            previewNextButton.classList.remove('u-isHidden');
        }

        this.previewBox.innerHTML = `<img src="${this.itemsData[this.currentItem].image}"/>`;
    }
}