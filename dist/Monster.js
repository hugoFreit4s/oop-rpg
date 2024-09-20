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
        this.eqpLoot = new BasicSword('Sword', 3, 1, 0, 1, false);
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
        console.log(`${this.name.toUpperCase()} IS DEAD AND DROPPED ${this.xpLoot} XP AND ${this.eqpLoot.name.toUpperCase()}\nYOUR XP POINTS: ${p.getExpAmount()} / ${p.getRequiredExp()}\n`);
        if (p.getInventory().length < 11) {
            if (p.getEquippedMeeleAmount() === 0) {
                this.eqpLoot = new BasicSword('Sword', 3, 1, 0, 1, true);
            }
            p.addToInventory(this.eqpLoot);
        }
        else {
            console.log(`ITEM NOT COLLECTED, INVENTORY FULL!`);
        }
    }
}
