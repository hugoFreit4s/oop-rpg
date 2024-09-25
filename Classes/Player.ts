import Armor from "./Armor.js";
import Entity from "./Entity.js";
import Equipment from './Equipment.js';
import Helper from "./Helper.js";
import Item from "./Item.js";
import Weapon from "./Weapon.js";

export default class Player extends Entity {
    private level: number;
    private itemInventory: Array<Equipment>;
    private equipedWeapon: Weapon | null;
    private equipedArmor: Armor | null;
    private expAmount: number;
    private requiredExp: number;
    private skillPoints: number;
    constructor(mHp: number, hp: number, atkPwr: number, def: number, name: string) {
        super(mHp, hp, atkPwr, def, name, 0);
        this.level = 1;
        this.itemInventory = [];
        this.equipedWeapon = null;
        this.equipedArmor = null;
        this.expAmount = 0;
        this.requiredExp = this.setRequiredExpAmount(this.level);
        this.skillPoints = 0;
    }

    get playerExpAmount(): number {
        return this.expAmount;
    }

    get playerRequiredExp(): number {
        return this.requiredExp;
    }

    get playerLevel(): number {
        return this.level;
    }

    get playerInventory(): Array<Equipment> {
        return this.itemInventory;
    }

    get playerWeapon(): Equipment | null {
        return this.equipedWeapon;
    }

    get playerArmor(): Equipment | null {
        return this.equipedArmor;
    }

    setRequiredExpAmount(level: number): number {
        const reqExp = level < 5 ? level * 5 : level * 10;
        return reqExp;
    }

    getDmg(dmg: number): string {
        this.putHp = this.entityHp - dmg < 0 ? 0 : this.entityHp - dmg;
        return `Damage taken: ${dmg} --- ${this.entityName} HP: ${this.entityHp} / ${this.entityMaxHp}`;
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
        this.putMaxHp = this.entityMaxHp + 1;
        this.putAtkPwr = this.entityAtkPwr + 1;
        this.putDef = this.entityDef + 1;
        this.putHp = this.entityMaxHp;
        this.expAmount -= this.requiredExp;
        this.requiredExp = this.setRequiredExpAmount(this.level);
        console.log(`\nLevel UP! --- New Level: ${this.level} --- Your stats increased by one\n----New stats----\nMaximum HP: ${this.entityMaxHp}\nDefense power: ${this.entityDef}\nAttack power: ${this.entityAtkPwr}\nLife restored! HP: ${Helper.showHp(this)}\nNew exp amount: ${this.expAmount} / ${this.requiredExp}`);
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
            console.log(this.itemInventory[i].itemName);
        }
    }

    sellEquipment(eqp: Equipment) {
        const tempArr: Array<Equipment> = [];
        this.increaseGoldAmount = eqp.itemValue;
        this.itemInventory.map(x => {
            if (eqp.id !== x.id) tempArr.push(x);
        });
        this.itemInventory = [...tempArr];
    }

    equipItem(equipment: Equipment): void {
        const provisoryArr: Array<Equipment> = [];
        if (equipment.category === 'Weapon') {
            if (this.equipedWeapon !== null) {
                this.itemInventory.map((x) => {
                    if (equipment.id !== x.id) provisoryArr.push(x);
                });
                provisoryArr.push(this.equipedWeapon);
                this.itemInventory = [...provisoryArr];
                this.equipedWeapon = equipment;
            } else {
                this.itemInventory.map((x) => {
                    if (equipment.id !== x.id) provisoryArr.push(x);
                });
                this.itemInventory = [...provisoryArr];
                this.equipedWeapon = equipment;
            }
        } else {
            if (this.equipedArmor !== null) {
                this.itemInventory.map((x) => {
                    if (equipment.id !== x.id) provisoryArr.push(x);
                });
                provisoryArr.push(this.equipedArmor);
                this.itemInventory = [...provisoryArr];
                this.equipedArmor = equipment;
            } else {
                this.itemInventory.map((x) => {
                    if (equipment.id !== x.id) provisoryArr.push(x);
                });
                this.itemInventory = [...provisoryArr];
                this.equipedArmor = equipment;
            }
        }

        this.putAtkPwr = this.entityAtkPwr + equipment.atk;
        this.putDef = this.entityDef + equipment.def;

        console.log(`Equiped weapon: ${this.equipedWeapon?.itemName}\nEquiped armor: ${this.equipedArmor?.itemName}`);
        console.log('Inventory:');
        for (let i = 0; i < this.itemInventory.length; i++) {
            console.log(this.itemInventory[i].itemName);
        }
    }

    unequipItem(equipment: Equipment) {
        switch (equipment.category) {
            case 'Weapon':
                if (this.itemInventory.length >= 10) {
                    console.log('No room to unequip. Inventory full!');
                } else if (equipment.id !== this.equipedWeapon?.id) {
                    console.log('Invalid ID');
                } else {
                    this.itemInventory.push(equipment);
                    this.equipedWeapon = null;
                    console.log(`Armor unequiped! ${this.equipedWeapon}\nUpdated inventory:`);
                    for (let i = 0; i < this.itemInventory.length; i++) {
                        console.log(this.itemInventory[i].itemName);
                    }
                }
                break;
            case 'Armor':
                if (this.itemInventory.length >= 10) {
                    console.log('No room to unequip. Inventory full!');
                } else if (equipment.id !== this.equipedArmor?.id) {
                    console.log('Invalid ID');
                } else {
                    this.itemInventory.push(equipment);
                    this.equipedArmor = null;
                    console.log(`Armor unequiped! ${this.equipedWeapon}\nUpdated inventory:`);
                    for (let i = 0; i < this.itemInventory.length; i++) {
                        console.log(this.itemInventory[i].itemName);
                    }
                }
                break;
            default:
                console.log('Invalid');
                break;
        }
        const ogAtkPower = this.entityAtkPwr - equipment.atk;
        const ogDefPower = this.entityDef - equipment.def;
        this.putAtkPwr = ogAtkPower;
        this.putDef = ogDefPower;
    }
}