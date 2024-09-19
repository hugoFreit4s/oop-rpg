import BasicSword from "./BasicSword.js";
import Entity from "./Entity.js";
export default class Monster extends Entity {
    race;
    xpLoot;
    eqpLoot;
    constructor(xpLoot, mHp, hp, strength, def, name, race) {
        super(mHp, hp, strength, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
        this.eqpLoot = new BasicSword('Sword', 3, 1, 0, 1);
    }
    attackSound() {
        console.log('atk monster');
    }
    getDamage(atkPwr, p) {
        const damage = atkPwr - this.def;
        if (this.hp - damage <= 0) {
            this.hp = 0;
            this.dropLoot(p);
        }
        else {
            this.hp -= damage;
        }
        console.log(`MONSTER HP: ${this.hp} / ${this.maxHp}`);
    }
    dropLoot(p) {
        p.increaseExp(this.xpLoot);
        if (p.getInventory().length < 10) {
            p.addToInventory(this.eqpLoot);
            console.log(`${this.name} dropped ${this.xpLoot} XP\nPlayer XP ${p.getExpAmount()}`);
        }
        else {
            console.log(`Inventory full`);
        }
    }
}
