import Equipment from "./Equipment.js";
export default class Armor extends Equipment {
    constructor(armorName, armorAtk, armorDef, armorMagic, armorLevel) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel);
    }
    increaseLvl() {
        this.level++;
    }
}
