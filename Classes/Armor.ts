import Equipment from "./Equipment.js";

export default class Armor extends Equipment {
    constructor(armorName: string, armorAtk: number, armorDef: number, armorMagic: number, armorLevel: number, id: string, category: "Weapon" | "Armor") {
        super(armorName, armorAtk, armorDef, armorMagic, armorLevel, id, category);
    }

    increaseLvl(): void {
        this.level++;
    }
}