import { Quote } from "./quote.js";

class Game {

    quotes = [{
        text: 'pan tadeusz',
        category: 'utwór literacki'
    }, {
        text: 'matrix',
        category: 'Film'
    }];

    constructor({ lettersWrapper, outputWrapper, wordWrapper, categoryWrapper }) {
        this.lettersWrapper = lettersWrapper;
        this.outputWrapper = outputWrapper;
        this.wordWrapper = wordWrapper;
        this.categoryWrapper = categoryWrapper;

        const { text, category } = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text)
    }
    quess(letters) {
        console.log(letters)

    }
    drawLetters() {
        for (let i = 10; i < 36; i++) {
            const label = i.toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.quess(label));
            this.lettersWrapper.appendChild(button);
        }
    }


    start() {
        this.drawLetters()
    }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    outputWrapper: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category')
});
game.start()