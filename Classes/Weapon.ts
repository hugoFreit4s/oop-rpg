import Equipment from "./Equipment.js";

export default class Weapon extends Equipment {
    constructor(weaponName: string, weaponAtk: number, weaponDef: number, weaponMagic: number, weaponLevel: number, id: string) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, 'Weapon');
    }

    increaseLvl(): void {
        this.level++;
    }
}