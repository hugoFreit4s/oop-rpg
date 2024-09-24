import Equipment from "./Equipment.js";
export default class Armor extends Equipment {
    constructor(armorName, armorAtk, armorDef, armorMagic, armorLevel, id) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, 'Armor');
    }
    increaseLvl() {
        this.level++;
    }
}
