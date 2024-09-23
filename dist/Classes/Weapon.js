import Equipment from "./Equipment.js";
export default class Weapon extends Equipment {
    constructor(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, category) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, category);
    }
    increaseLvl() {
        this.level++;
    }
}
