import Equipment from "./Equipment.js";

export default class Armor extends Equipment {
    constructor(armorName: string, armorAtk: number, armorDef: number, armorMagic: number, armorLevel: number, id: string, value: number) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, 'Armor', value);
    }

    increaseLvl(): void {
        this.level++;
    }
}