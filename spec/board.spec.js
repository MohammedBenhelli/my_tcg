import Board from "../src/models/board";

describe('Test de board', function () {
    const config = {
        cards: [1,4,6,7,8,9]
    }
    const board = new Board(config);

    it('La methode addCard existe', function () {
        expect(board.addCard).toBeDefined();
    });

    it('Test addCard', function () {
        board.addCard(7);
        expect(board.cards[board.cards.length - 1]).toBe(7);
    });

    it('La methode removeCard existe', function () {
        expect(board.removeCard).toBeDefined();
    });

    it('Test removeCard', function () {
        const size = board.cards.length;
        const removed = board.cards[6];
        const card = board.removeCard(6)
        expect(board.cards.length).toBe(size - 1);
        expect(card).toBe(removed);
    });

    it('La methode getAllCards existe', function () {
        expect(board.getAllCards).toBeDefined();
    });

    it('Test getAllCards', function () {
        expect(board.getAllCards()).toBe(board.cards)
    });

    it('La methode getCardsCount existe', function () {
        expect(board.getCardsCount).toBeDefined();
    });

    it('Test getCardsCount', function () {
        expect(board.getCardsCount()).toBe(board.cards.length);
    });
});
