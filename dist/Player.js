import Entity from "./Entity.js";
export default class Player extends Entity {
    expAmount;
    level;
    requiredExp;
    constructor(mHp, hp, atk, def, name) {
        super(mHp, hp, atk, def, name);
        this.expAmount = 0;
        this.level = 1;
        this.requiredExp = this.level * 30;
    }
    attackSound() {
        console.log('grr');
    }
    increaseExp(value) {
        this.expAmount += value;
        if (this.expAmount >= this.requiredExp) {
            this.levelUp();
            this.expAmount -= this.requiredExp;
        }
    }
    levelUp() {
        this.atk++;
        this.def++;
        this.level++;
        this.hp = this.maxHp;
        console.log(`LVL UP! All stats increased 1 points!\nNew level: ${this.level}`);
    }
    getLevel() {
        return this.level;
    }
    getDamage(atkPwr) {
        const damage = atkPwr - this.def;
        if (this.hp - damage < 0) {
            console.log('Game over!');
            this.level = 1;
            this.atk = 1;
            this.def = 1;
            this.maxHp = 10;
            this.hp = 10;
            console.log(`Level: ${this.level}\nHP: ${this.hp} / ${this.maxHp}`);
        }
        else {
            this.hp -= damage;
            console.log(`\nOUCH!\nHP: ${this.hp} / ${this.maxHp}`);
        }
    }
    getExpAmount() {
        return this.expAmount;
    }
}
