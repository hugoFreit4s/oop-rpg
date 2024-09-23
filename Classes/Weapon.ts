import Equipment from "./Equipment.js";

export default class Weapon extends Equipment {
    constructor(weaponName: string, weaponAtk: number, weaponDef: number, weaponMagic: number, weaponLevel: number, id: string, category: "Weapon" | "Armor") {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, category);
    }

    increaseLvl(): void {
        this.level++;
    }
}