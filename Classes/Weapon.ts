import Equipment from "./Equipment.js";

export default class Weapon extends Equipment {
    constructor(weaponName: string, weaponAtk: number, weaponDef: number, weaponMagic: number, weaponLevel: number, id: string, value: number) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, 'Weapon', value);
    }

    increaseLvl(): void {
        this.level++;
    }
}