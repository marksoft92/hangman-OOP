class Game {
    constructor({ lettersWrapper, outputWrapper, wordWrapper, categoryWrapper }) {
        this.lettersWrapper = lettersWrapper;
        this.outputWrapper = outputWrapper;
        this.wordWrapper = wordWrapper;
        this.categoryWrapper = categoryWrapper;
    }
    start() {
        console.log('x')
    }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters');
    outputWrapper: document.getElementById('output');
    wordWrapper: document.getElementById('word');
    categoryWrapper: document.getElementById('letters');
});
game.start()