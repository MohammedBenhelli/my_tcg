import ModelFactory from './factory';
import Pawn from "./pawn";

export default class Player extends Pawn{

    constructor(config) {
        super(config);
        this.type = config.type;
        this.deck = ModelFactory.get('deck');
        this.board = ModelFactory.get('board');
        this.hand = ModelFactory.get('hand');
        this.cemetary = ModelFactory.get('cemetary')
    }

    draw () {
        return this.deck.draw();
    }

    shuffle(type='deck') {
        if (type === 'deck') return this.deck.shuffle();
        else if (type === 'cemetary') return this.cemetary.shuffle();
        else return false;
    }

    playCard(position) {
        return this.board.addCard(this.hand.removeCard(position));
    }

    discard(position) {
        return this.cemetary.addCard(this.hand.removeCard(position));
    }

    attack(position, target) {
        this.board[position].attack(target);
    }
}
