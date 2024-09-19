import Entity from "./Entity.js";
export default class Monster extends Entity {
    race;
    xpLoot;
    constructor(xpLoot, mHp, hp, strength, def, name, race) {
        super(mHp, hp, strength, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
    }
    attackSound() {
        console.log('atk monster');
    }
    getDamage(atkPwr, p) {
        const damage = atkPwr - this.def;
        if (this.hp - damage <= 0) {
            this.hp = 0;
            this.dropExp(p);
        }
        else {
            this.hp -= damage;
        }
        console.log(`MONSTER HP: ${this.hp} / ${this.maxHp}`);
    }
    dropExp(p) {
        p.increaseExp(this.xpLoot);
        console.log(`${this.name} dropped ${this.xpLoot} XP\nPlayer XP ${p.getExpAmount()}`);
    }
}
