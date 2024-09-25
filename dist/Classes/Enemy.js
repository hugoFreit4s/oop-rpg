import Entity from "./Entity.js";
export default class Enemy extends Entity {
    race;
    xpLoot;
    eqpLoot;
    constructor(mHp, hp, strength, def, name, xpLoot, race, loot, goldLoot) {
        super(mHp, hp, strength, def, name, goldLoot);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = loot;
    }
    getDmg(dmg) {
        this.putHp = this.entityHp - dmg < 0 ? 0 : this.entityHp - dmg;
        return `Damage given: ${dmg} --- ${this.entityName} HP: ${this.entityHp} / ${this.entityMaxHp}`;
    }
    get loot() {
        return this.eqpLoot;
    }
}
