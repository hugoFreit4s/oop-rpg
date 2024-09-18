import Entity from "./Entity.js";
export default class Player extends Entity {
    exp;
    level;
    constructor(mHp, hp, atk, def, name) {
        super(mHp, hp, atk, def, name);
        this.exp = 0;
        this.level = 1;
    }
    emitirSomDeAtaque() {
        console.log('atk player');
    }
    setExp(value) {
        this.exp += value;
    }
    getExp() {
        return this.exp;
    }
    increaseLevel() {
        this.level += 1;
        this.maxHp += 1;
        this.hp = this.maxHp;
        this.atk += 1;
        this.def += 1;
    }
    getLevel() {
        return this.level;
    }
}
