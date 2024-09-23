import Equipment from "./Equipment.js";

export default class Weapon extends Equipment {
    constructor(weaponName: string, weaponAtk: number, weaponDef: number, weaponMagic: number, weaponLevel: number) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel);
    }

    increaseLvl(): void {
        this.level++;
    }
}