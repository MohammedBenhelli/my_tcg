import Hand from "../src/models/hand";

describe('Test de hand', function () {
    const config = {
        cards: [1,4,6,7,8,9]
    }
    const hand = new Hand(config);

    it('La methode addCard existe', function () {
        expect(hand.addCard).toBeDefined();
    });

    it('Test addCard', function () {
        hand.addCard(7);
        expect(hand.cards[hand.cards.length - 1]).toBe(7);
    });

    it('La methode removeCard existe', function () {
        expect(hand.removeCard).toBeDefined();
    });

    it('Test removeCard', function () {
        const size = hand.cards.length;
        const removed = hand.cards[6];
        const card = hand.removeCard(6)
        expect(hand.cards.length).toBe(size - 1);
        expect(card).toBe(removed);
    });

    it('La methode getAllCards existe', function () {
        expect(hand.getAllCards).toBeDefined();
    });

    it('Test getAllCards', function () {
        expect(hand.getAllCards()).toBe(hand.cards)
    });

    it('La methode getCardsCount existe', function () {
        expect(hand.getCardsCount).toBeDefined();
    });

    it('Test getCardsCount', function () {
        expect(hand.getCardsCount()).toBe(hand.cards.length);
    });
});
