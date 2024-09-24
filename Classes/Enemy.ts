import Entity from "./Entity.js";
import Equipment from "./Equipment.js";

export default class Enemy extends Entity {
    race: 'Orc' | 'Troll' | 'Human';
    xpLoot: number;
    private eqpLoot: Array<Equipment>;
    constructor(mHp: number, hp: number, strength: number, def: number, name: string, xpLoot: number, race: 'Orc' | 'Troll' | 'Human', loot: Array<Equipment>) {
        super(mHp, hp, strength, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = loot;
    }

    getDmg(dmg: number): string {
        this.hp = this.hp - dmg < 0 ? 0 : this.hp - dmg;
        return `Damage given: ${dmg} --- ${this.name} HP: ${this.hp} / ${this.maxHp}`;
    }

    get loot(): Array<Equipment> {
        return this.eqpLoot;
    }
}