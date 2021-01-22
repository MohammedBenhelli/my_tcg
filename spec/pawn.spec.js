import Pawn from "../src/models/pawn";

describe('Test de hand', function () {
    const pawn = new Pawn(7, 15, 6);

    it('La methode getLife existe', function () {
        expect(pawn.getLife).toBeDefined();
    });

    it('Test getLife', function () {
        expect(pawn.getLife).toBe(7);
    });

    it('La methode getStrength existe', function () {
        expect(pawn.getStrength).toBeDefined();
    });

    it('Test getStrength', function () {
        expect(pawn.getStrength).toBe(15);
    });

    it('La methode getDef existe', function () {
        expect(pawn.getDef).toBeDefined();
    });

    it('Test getDef', function () {
        expect(pawn.getDef()).toBe(6)
    });

    it('La methode attack existe', function () {
        expect(pawn.attack).toBeDefined();
    });

    it('La methode receiveAttack existe', function () {
        expect(pawn.receiveAttack).toBeDefined();
    });
});
