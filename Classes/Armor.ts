import Equipment from "./Equipment.js";

export default class Armor extends Equipment {
    constructor(armorName: string, armorAtk: number, armorDef: number, armorMagic: number, armorLevel: number) {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel);
    }

    increaseLvl(): void {
        this.level++;
    }
}