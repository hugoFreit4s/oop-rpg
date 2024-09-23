import Entity from "./Entity.js";
import Equipment from "./Equipment.js";

export default class Enemy extends Entity {
    race: 'Orc' | 'Troll' | 'Human';
    xpLoot: number;
    eqpLoot: Array<Equipment>;
    constructor(mHp: number, hp: number, strength: number, def: number, name: string, xpLoot: number, race: 'Orc' | 'Troll' | 'Human', loot: Array<Equipment>) {
        super(mHp, hp, strength, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = loot;
    }

    getDmg(dmg: number): void {
        this.hp = this.hp - dmg < 0 ? 0 : this.hp - dmg;
        console.log(`Damage given: ${dmg} --- ${this.name} HP: ${this.hp} / ${this.maxHp}`)
    }
}