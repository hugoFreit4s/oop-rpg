import Equipment, { CategoryENUM } from "./Equipment.js";
export default class Armor extends Equipment {
    constructor(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, value) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, CategoryENUM.ARMOR, value);
    }
    increaseLvl() {
        this.level++;
    }
}
