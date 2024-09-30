import Equipment, { CategoryENUM } from "./Equipment.js";

export default class Armor extends Equipment {
    constructor(armorName: string, armorAtk: number, armorDef: number, armorMagic: number, armorLevel: number, id: string, value: number) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, CategoryENUM.ARMOR, value);
    }

    increaseLvl(): void {
        this.level++;
    }
}