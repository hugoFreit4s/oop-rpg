import Equipment from "./Equipment.js";
export default class Weapon extends Equipment {
    constructor(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel);
    }
    increaseLvl() {
        this.level++;
    }
}
