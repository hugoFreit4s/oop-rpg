import Equipment from "./Equipment.js";
export default class Weapon extends Equipment {
    constructor(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id);
    }
    increaseLvl() {
        this.level++;
    }
}
