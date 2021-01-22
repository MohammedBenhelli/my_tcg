import EventManager from "../eventManager";

export default class Game extends EventManager {
    constructor(config) {
        super();
        this.up = config.up;
        this.down = config.down;
        this.turn = 'up';
    }

    getTurn() {
        return this.turn;
    }

    changeTurn() {
        if (this.turn === 'up') this.turn = 'down';
        else this.turn = 'up';
        return this.getTurn();
    }

    proxy(side, action, payload) {
        if (side === 'up') return this.up[action](payload);
        else return this.down[action](payload);
    }
}
