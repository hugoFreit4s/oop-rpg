import Entity from "./Entity.js";
import Equipment from "./Equipment.js";

export default class Enemy extends Entity {
    race: 'Orc' | 'Troll' | 'Human';
    xpLoot: number;
    private eqpLoot: Array<Equipment>;
    constructor(mHp: number, hp: number, strength: number, def: number, name: string, xpLoot: number, race: 'Orc' | 'Troll' | 'Human', loot: Array<Equipment>, goldLoot: number) {
        super(mHp, hp, strength, def, name, goldLoot);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = loot;
    }

    getDmg(dmg: number): void {
        this.putHp = this.entityHp - dmg < 0 ? 0 : this.entityHp - dmg;
    }

    get loot(): Array<Equipment> {
        return this.eqpLoot;
    }
}