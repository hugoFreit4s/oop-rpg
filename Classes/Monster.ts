import BasicSword from "./BasicSword.js";
import Entity from "./Entity.js";
import Equipment from "./Equipment.js";
import Player from "./Player.js";

export default class Monster extends Entity {
    race: 'Orc' | 'Troll' | 'Human';
    xpLoot: number;
    eqpLoot: Equipment;
    constructor(xpLoot: number, mHp: number, hp: number, strength: number, def: number, name: string, race: 'Orc' | 'Troll' | 'Human') {
        super(mHp, hp, strength, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = new BasicSword('Sword', 3, 1, 0, 1);
    }

    attackSound(): void {
        console.log('atk monster');
    }

    getDamage(atkPwr: number, p: Player): void {
        const damage = atkPwr - this.def;
        if (this.hp - damage <= 0) {
            this.hp = 0;
            this.dropLoot(p);
        } else {
            this.hp -= damage;
        }
        console.log(`MONSTER HP: ${this.hp} / ${this.maxHp}`)
    }

    dropLoot(p: Player) {
        p.increaseExp(this.xpLoot);
        if (p.getInventory().length < 11) {
            p.addToInventory(this.eqpLoot);
            console.log(`${this.name} dropped ${this.xpLoot} XP\nPlayer XP ${p.getExpAmount()}`);
        } else {
            console.log(`Inventory full`);
        }
    }
}