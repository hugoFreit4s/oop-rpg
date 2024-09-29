import Equipment, { EquipmentCategory } from "./Equipment.js";
export default class Weapon extends Equipment {
    constructor(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, value) {
        super(weaponName, weaponAtk, weaponDef, weaponMagic, weaponLevel, id, EquipmentCategory.WEAPON, value);
    }
    increaseLvl() {
        this.level++;
    }
}
