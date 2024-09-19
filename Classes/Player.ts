import Entity from "./Entity.js";

export default class Player extends Entity {
    private expAmount: number;
    private level: number;
    private requiredExp: number;
    private skillPoints: number;
    constructor(mHp: number, hp: number, strength: number, def: number, name: string) {
        super(mHp, hp, strength, def, name);
        this.expAmount = 0;
        this.level = 1;
        this.requiredExp = this.level * 30;
        this.skillPoints = 0;
    }

    attackSound(): void {
        console.log('grr')
    }

    increaseExp(value: number): void {
        this.expAmount += value;
        if (this.expAmount >= this.requiredExp) {
            this.levelUp();
            this.expAmount -= this.requiredExp;
        }
    }

    levelUp() {
        this.strength++;
        this.def++;
        this.level++
        this.hp = this.maxHp;

        if (this.level < 6) {
            this.skillPoints = 3;
        } else if (this.level < 10) {
            this.skillPoints = 5;
        } else {
            this.skillPoints = 7;
        }

        console.log(`LVL UP! All stats increased 1 points!\nNew level: ${this.level}`);
    }

    getLevel() {
        return this.level;
    }

    getDamage(atkPwr: number) {
        const damage = atkPwr - this.def;
        if (this.hp - damage < 0) {
            console.log('Game over!');
            this.level = 1;
            this.strength = 1;
            this.def = 1;
            this.maxHp = 10;
            this.hp = 10;
            console.log(`Level: ${this.level}\nHP: ${this.hp} / ${this.maxHp}`);
        } else {
            this.hp -= damage;
            console.log(`\nOUCH!\nHP: ${this.hp} / ${this.maxHp}`);
        }
    }

    getExpAmount() {
        return this.expAmount;
    }
}