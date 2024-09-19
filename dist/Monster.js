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
    }
    getDamage(atkPwr, p) {
        let damage = atkPwr - this.def;
        if (damage < 0) {
            damage = 0;
        }
        if (this.hp - damage <= 0) {
            this.hp = 0;
            this.dropLoot(p);
        }
        else {
            this.hp -= damage;
        }
        console.log(`\n${damage} DAMAGE GIVEN TO ${this.name.toUpperCase()}`);
    }
    dropLoot(p) {
        p.increaseExp(this.xpLoot);
        if (p.getInventory().length < 11) {
            p.addToInventory(this.eqpLoot);
            console.log(`${this.name} IS DEAD AND DROPPED ${this.xpLoot} XP AND ${this.eqpLoot.name}\nYOUR XP POINTS: ${p.getExpAmount()} / ${p.getRequiredExp()}`);
        }
        else {
            console.log(`ITEM NOT COLLECTED, INVENTORY FULL!`);
        }
    }
}
