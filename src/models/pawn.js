export default class Pawn {
    constructor(life, strength, def) {
        this.life = life;
        this.strength = strength;
        this.def = def;
    }

    getLife() {
        return this.life;
    }

    getStrength() {
        return this.strength;
    }

    getDef() {
        return this.def;
    }

    attack(target) {
        target.receiveAttack(this);
    }

    receiveAttack(opponent, strikeBack=false) {
        if (strikeBack) this.life -= opponent.getDef();
        else this.life -= opponent.getStrength();
    }
}
