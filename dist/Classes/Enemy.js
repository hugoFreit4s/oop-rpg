import Entity from "./Entity.js";
export default class Enemy extends Entity {
    race;
    xpLoot;
    eqpLoot;
    constructor(mHp, hp, strength, def, name, xpLoot, race, loot) {
        super(mHp, hp, strength, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = loot;
    }
    getDmg(dmg) {
        this.hp = this.hp - dmg < 0 ? 0 : this.hp - dmg;
        return `Damage given: ${dmg} --- ${this.name} HP: ${this.hp} / ${this.maxHp}`;
    }
    get loot() {
        return this.eqpLoot;
    }
}
