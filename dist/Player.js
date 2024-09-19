import * as readline from 'readline';
import Entity from "./Entity.js";
export default class Player extends Entity {
    expAmount;
    level;
    requiredExp;
    skillPoints;
    constructor(mHp, hp, strength, def, name) {
        super(mHp, hp, strength, def, name);
        this.expAmount = 0;
        this.level = 1;
        this.requiredExp = 1;
        this.skillPoints = 0;
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
        this.strength++;
        this.def++;
        this.level++;
        this.hp = this.maxHp;
        if (this.level < 6) {
            this.skillPoints = 3;
        }
        else if (this.level < 10) {
            this.skillPoints = 5;
        }
        else {
            this.skillPoints = 7;
        }
        this.setSkillPoints();
        // console.log(`LVL UP! All stats increased 1 points!\nNew level: ${this.level}\nSkill points earned: ${this.skillPoints}`);
    }
    setSkillPoints() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const askQuestions = (question) => {
            return new Promise((resolve) => {
                rl.question(question, answer => resolve(answer));
            });
        };
        const distribute = async () => {
            while (this.skillPoints > 0) {
                console.log(`\nYour stats: Strength: ${this.strength}`);
                console.log(`Remaining skill points: ${this.skillPoints}`);
                const choice = await askQuestions(`Where would you like to assign a point? (strength/agility/intelligence): `);
                switch (choice.toLowerCase()) {
                    case 'strength':
                        this.strength++;
                        break;
                    default:
                        console.log('Invalid choice. Try again.');
                        continue;
                }
                this.skillPoints--;
            }
            rl.close();
            console.log(`\nFinal stats: Strength: ${this.strength}`);
        };
        distribute();
    }
    getLevel() {
        return this.level;
    }
    getDamage(atkPwr) {
        const damage = atkPwr - this.def;
        if (this.hp - damage < 0) {
            console.log('Game over!');
            this.level = 1;
            this.strength = 1;
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
