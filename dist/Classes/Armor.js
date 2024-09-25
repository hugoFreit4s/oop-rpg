import Equipment from "./Equipment.js";
export default class Armor extends Equipment {
    constructor(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, value) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, 'Armor', value);
    }
    increaseLvl() {
        this.level++;
    }
}
