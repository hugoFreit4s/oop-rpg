import Entity from "./Entity.js";
import Equipment from './Equipment.js';
import Helper from "./Helper.js";

export default class Player extends Entity {
    private level: number;
    private itemInventory: Array<Equipment>;
    private equipedItems: Array<Equipment>;
    private expAmount: number;
    private requiredExp: number;
    private skillPoints: number;
    constructor(mHp: number, hp: number, atkPwr: number, def: number, name: string) {
        super(mHp, hp, atkPwr, def, name);
        this.level = 1;
        this.itemInventory = [];
        this.equipedItems = [];
        this.expAmount = 0;
        this.requiredExp = this.level < 5 ? this.level * 5 : this.level * 10;
        this.skillPoints = 0;
    }

    get playerExpAmount(): number {
        return this.expAmount;
    }

    get playerRequiredExp(): number {
        return this.requiredExp;
    }

    getDmg(dmg: number): void {
        this.hp = this.hp - dmg < 0 ? 0 : this.hp - dmg;
        console.log(`Damage taken: ${dmg} --- ${this.name} HP: ${this.hp} / ${this.maxHp}`)
    }

    increasePlayerExpAmount(expToAdd: number) {
        this.expAmount += expToAdd;
        if (this.expAmount >= this.requiredExp) {
            this.upLevel();
        }
        console.log(`\nExp amount: ${this.expAmount} / ${this.requiredExp}`);
    }

    upLevel(): void {
        this.level++;
        this.maxHp++;
        this.atkPwr++;
        this.def++;
        this.hp = this.maxHp;
        this.expAmount -= this.requiredExp;
        console.log(`\nLevel UP! --- New Level: ${this.level} --- Your stats increased by one\n----New stats----\nMaximum HP: ${this.maxHp}\nDefense power: ${this.def}\nAttack power: ${this.atkPwr}\nLife restored! HP: ${Helper.showHp(this)}\nNew exp amount: ${this.expAmount} / ${this.requiredExp}`);
        if (this.expAmount >= this.requiredExp) this.upLevel();
    }

    addToInventory(loot: Array<Equipment>): void {
        // console.log(loot);
        if (this.itemInventory.length >= 10) {
            console.log(`Invetory full, no items collected!`);
        } else {
            loot.forEach(x => this.itemInventory.push(x));
        }

        console.log(`Updated inventory:\n`);
        for (let i = 0; i < this.itemInventory.length; i++) {
            console.log(this.itemInventory[i].equipmentName);
        }
    }
}