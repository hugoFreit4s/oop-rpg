import Equipment from "./Equipment.js";
export default class Armor extends Equipment {
    constructor(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, category) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, category);
    }
    increaseLvl() {
        this.level++;
    }
}
