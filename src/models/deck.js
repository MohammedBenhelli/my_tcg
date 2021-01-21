export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {
        const tmp = this.cards;
        this.cards.sort(() => Math.random() - 0.5);
        return tmp === this.cards;
    }

    draw() {
        return this.cards.shift();
    }

    getCardsCount() {
        return this.cards.length;
    }

    insertAt(card, position) {
        this.cards.splice(position, 0, card);
    }
}
