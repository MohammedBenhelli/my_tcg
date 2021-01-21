export default class Hand {
    constructor(config, limit=7) {
        this.cards = config.cards;
        this.limit = limit;
    }

    addCard(card) {
        if (this.cards.length === this.limit) return false;
        else this.cards.push(card);
        return true;
    }

    removeCard(position) {
        if (this.cards.length > position) {
            const ret = this.cards[position];
            this.cards = this.cards.filter((c, i) => i !== position)
            return ret;
        } else return false;
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}
