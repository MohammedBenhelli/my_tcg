import Cemetary from "../src/models/cemetary";

const arraysAreEqual = (before, after) =>{
    if(before.length !== after.length) return false;
    for(let i = 0; i < before.length; i++)
        if(before[i] !== after[i]) return false;
    return true;
}

describe('Test du cemetary', function () {
    const config = {
        cards: [1,4,6,7,8,9]
    }
    const cemetary = new Cemetary(config);

    it('La methode shuffle existe', function () {
        expect(cemetary.shuffle).toBeDefined();
    });

    it('Test shuffle', function () {
        const ret = cemetary.shuffle();
        if (ret) expect(arraysAreEqual(cemetary.cards, config.cards)).toBe(true);
        else  expect(arraysAreEqual(cemetary.cards, config.cards)).toBe(false);
    });

    it('La methode insertAt existe', function () {
        expect(cemetary.insertAt).toBeDefined();
    });

    it('Test insertAt', function () {
        cemetary.insertAt(65, 2)
        expect(cemetary.cards[2]).toBe(65);
    });

    it('La methode draw existe', function () {
        expect(cemetary.draw).toBeDefined();
    });

    it('Test draw', function () {
        const drawed = cemetary.cards[0];
        const size = cemetary.cards.length;
        expect(cemetary.draw()).toBe(drawed);
        expect(cemetary.cards.length).toBe(size - 1)
    });

    it('La methode getCardsCount existe', function () {
        expect(cemetary.getCardsCount).toBeDefined();
    });

    it('Test getCardsCount', function () {
        expect(cemetary.getCardsCount()).toBe(cemetary.cards.length);
    });
});
