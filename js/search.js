import 'whatwg-fetch';
import {appendHtml, clearChildren} from './helpers';
import Preview from './preview';

export default class Search {
    constructor() {
        this.lastSearchedTerm = "";
        this.preview = new Preview();
    }

    initialize() {
        const searchForm = document.querySelector('.js-searchForm');
        const searchTextBox = document.querySelector('.js-searchTextBox');

        // Search form submit event
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.search(searchTextBox.value);
            return false;
        });
    }

    search(searchTerm) {
        if (searchTerm !== "" && searchTerm !== this.lastSearchedTerm) {
            this.lastSearchedTerm = searchTerm;

            fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=dc6zaTOxFJmzC&limit=50&offset=0`)
                .then(function (response) {
                    return response.json()
                }).then(function (json) {
                if (json.meta.status === 200) {
                    this.results = json.data;
                    this.updateResults();
                    //initialize Preview Lightbox
                    this.preview.initialize(json.data.map(item => {
                        return {image: item.images.original.url};
                    }));
                } else {
                    alert("Problem in fetching data");
                }
            }.bind(this)).catch(function (ex) {
                console.log('parsing failed', ex)
            })
        }
    }

    updateResults() {
        const resultsContainer = document.querySelector('.js-resultsContainer');
        clearChildren(resultsContainer);
        if (this.results && this.results.length) {
            let resultsElementString = '<div class="SearchPage-results">';
            for (let i = 0; i < this.results.length; i++) {
                resultsElementString += `<div class="SearchItem SearchItem-sizeMedium js-resultsItem"` +
                    `style="background-image: URL(${this.results[i].images.fixed_width.url})"` +
                    ` data-item-index="${i}"></div>`;
            }
            resultsElementString += '</div>';
            appendHtml(resultsContainer, resultsElementString);
        } else {
            appendHtml(resultsContainer,
                '<div class="SearchPage-noResults">' +
                'Your search did not match any giphy!<br/>Search for another term!<br/>' +
                '<div><iframe src="//giphy.com/embed/ZgCeagL3AmIGQ" width="480" height="136" frameBorder="0" class="giphy-embed"' +
                ' allowFullScreen></iframe><p><a href="http://giphy.com/gifs/nothing-ZgCeagL3AmIGQ">via GIPHY</a></p></div>' +
                '</div>')
        }
    }
}