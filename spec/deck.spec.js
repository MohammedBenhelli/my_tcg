import Deck from "../src/models/deck";

const arraysAreEqual = (before, after) =>{
    if(before.length !== after.length) return false;
    for(let i = 0; i < before.length; i++)
        if(before[i] !== after[i]) return false;
    return true;
}

describe('Test du deck', function () {
    const config = {
        cards: [1,4,6,7,8,9]
    }
    const deck = new Deck(config);

    it('La methode shuffle existe', function () {
        expect(deck.shuffle).toBeDefined();
    });

    it('Test shuffle', function () {
       const ret = deck.shuffle();
       if (ret) expect(arraysAreEqual(deck.cards, config.cards)).toBe(true);
        else  expect(arraysAreEqual(deck.cards, config.cards)).toBe(false);
    });

    it('La methode insertAt existe', function () {
        expect(deck.insertAt).toBeDefined();
    });

    it('Test insertAt', function () {
        deck.insertAt(65, 2)
        expect(deck.cards[2]).toBe(65);
    });

    it('La methode draw existe', function () {
        expect(deck.draw).toBeDefined();
    });

    it('Test draw', function () {
        const drawed = deck.cards[0];
        const size = deck.cards.length;
        expect(deck.draw()).toBe(drawed);
        expect(deck.cards.length).toBe(size - 1)
    });

    it('La methode getCardsCount existe', function () {
        expect(deck.getCardsCount).toBeDefined();
    });

    it('Test getCardsCount', function () {
        expect(deck.getCardsCount()).toBe(deck.cards.length);
    });
});
