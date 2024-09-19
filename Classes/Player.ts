// import * as readline from 'readline';
import Entity from "./Entity.js";
import Equipment from './Equipment.js';

export default class Player extends Entity {
    private inventory: Array<Equipment>;
    private expAmount: number;
    private level: number;
    private requiredExp: number;
    private skillPoints: number;
    constructor(mHp: number, hp: number, strength: number, def: number, name: string) {
        super(mHp, hp, strength, def, name);
        this.inventory = [];
        this.expAmount = 0;
        this.level = 1;
        this.requiredExp = 1;
        this.skillPoints = 0;
    }

    attackSound(): void {
    }

    increaseExp(value: number): void {
        this.expAmount += value;
        if (this.expAmount >= this.requiredExp) {
            this.levelUp();
            this.expAmount -= this.requiredExp;
        }
    }

    levelUp() {
        this.hp = this.maxHp;
        this.level++;
        this.maxHp++;
        this.strength++;
        this.def++;

        if (this.level < 6) {
            this.skillPoints = 3;
        } else if (this.level < 10) {
            this.skillPoints = 5;
        } else {
            this.skillPoints = 7;
        }

        console.log(`LVL UP! New level: ${this.level}\nSkill points earned: ${this.skillPoints}`);
        // this.setSkillPoints();
    }


    getLevel() {
        return this.level;
    }

    getDamage(atkPwr: number) {
        let damage = atkPwr - this.def;
        if(damage < 0) {
            damage = 0;
        }
        if (this.hp - damage <= 0) {
            this.level = 1;
            this.strength = 1;
            this.def = 1;
            this.maxHp = 10;
            this.hp = 10;
            console.log('Game over!');
            console.log(`----NEW GAME----\nLevel: ${this.level}\nHP: ${this.hp} / ${this.maxHp}`);
        } else {
            this.hp -= damage;
            console.log(`${damage} DAMAGE TAKEN!`);
        }
    }

    getExpAmount(): number {
        return this.expAmount;
    }

    addToInventory(eqp: Equipment): void {
        this.inventory.push(eqp);
        console.log(`INVENTORY:`);
        this.inventory.forEach(x => console.log(x));
    }

    getInventory(): Array<Equipment> {
        return this.inventory;
    }

    getRequiredExp(): number {
        return this.requiredExp;
    }

    getMaxHp(): number {
        return this.maxHp;
    }
}

// setSkillPoints() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     const askQuestions = (question: string) => {
//         return new Promise<string>((resolve) => {
//             rl.question(question, answer => resolve(answer));
//         });
//     };

//     const distribute = async () => {
//         while (this.skillPoints > 0) {
//             console.log(`\nYour stats: Strength: ${this.strength}, Defense: ${this.def}, Max HP: ${this.maxHp}`);
//             console.log(`Remaining skill points: ${this.skillPoints}`);

//             const choice = await askQuestions(`Where would you like to assign a point? (strength/agility/intelligence): `);

//             switch (choice.toLowerCase()) {
//                 case '1':
//                     this.strength++;
//                     break;
//                 case '2':
//                     this.def++;
//                     break;
//                 case '3':
//                     this.maxHp++;
//                     break;
//                 default:
//                     console.log('Invalid choice. Try again.');
//                     continue;
//             }

//             this.skillPoints--;
//         }
//         rl.close();
//         console.log(`\nFinal stats: Strength: ${this.strength}, Defense: ${this.def}, Max HP: ${this.maxHp}`);
//     };

//     distribute();
// }