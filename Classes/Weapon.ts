import Equipment, { CategoryENUM } from "./Equipment.js";

export default class Weapon extends Equipment {
    constructor(weaponName: string, weaponAtk: number, weaponDef: number, weaponMagic: number, weaponLevel: number, id: string, value: number) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, CategoryENUM.WEAPON, value);
    }

    increaseLvl(): void {
        this.level++;
    }
}