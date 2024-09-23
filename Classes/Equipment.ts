import Item from "./Item.js";

export default abstract class Equipment extends Item {
    atk: number;
    def: number;
    magic: number;
    level: number;
    constructor(name: string, atkPwr: number, defPwr: number, magicPwr: number, level: number) {
        super(name);
        this.atk = atkPwr;
        this.def = defPwr;
        this.magic = magicPwr;
        this.level = level;
    }

    abstract increaseLvl(): void;

    //Atk
    get eqpAtk(): number {
        return this.atk;
    }
    set putEqpAtk(newAtkPwr: number) {
        this.atk = newAtkPwr;
    }

    //Def
    get eqpDef(): number {
        return this.def
    }
    set putEqpDef(newDefPwr: number) {
        this.def = newDefPwr;
    }

    //Magic
    get eqpMagic(): number {
        return this.magic;
    }
    set putEqpMagic(newMagicPwr: number) {
        this.magic = newMagicPwr;
    }

    //Level
    get eqpLvl(): number {
        return this.level;
    }
    set putEqpLvl(newLevel: number) {
        this.level = newLevel;
    }
}