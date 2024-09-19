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
    }

    getDamage(atkPwr: number, p: Player): void {
        let damage = atkPwr - this.def;
        if(damage < 0) {
            damage = 0;
        }

        if (this.hp - damage <= 0) {
            this.hp = 0;
            this.dropLoot(p);
        } else {
            this.hp -= damage;
        }
        console.log(`\n${damage} DAMAGE GIVEN TO ${this.name.toUpperCase()}`)
    }

    dropLoot(p: Player) {
        p.increaseExp(this.xpLoot);
        if (p.getInventory().length < 11) {
            p.addToInventory(this.eqpLoot);
            console.log(`${this.name} IS DEAD AND DROPPED ${this.xpLoot} XP AND ${this.eqpLoot.name}\nYOUR XP POINTS: ${p.getExpAmount()} / ${p.getRequiredExp()}`);
        } else {
            console.log(`ITEM NOT COLLECTED, INVENTORY FULL!`);
        }
    }
}