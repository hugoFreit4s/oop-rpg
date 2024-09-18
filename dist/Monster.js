import Entity from "./Entity.js";
export default class Monster extends Entity {
    race;
    constructor(mHp, hp, atk, def, name, race) {
        super(mHp, hp, atk, def, name);
        this.race = race;
    }
    emitirSomDeAtaque() {
        console.log('atk monster');
    }
    droparExp() {
        if (this.hp > 0)
            return;
    }
    respawnMonster() {
        this.hp = this.maxHp;
    }
}
