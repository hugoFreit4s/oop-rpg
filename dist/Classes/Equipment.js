import Item from "./Item.js";
export default class Equipment extends Item {
    atk;
    def;
    magic;
    level;
    id;
    constructor(name, atkPwr, defPwr, magicPwr, level, id) {
        super(name);
        this.atk = atkPwr;
        this.def = defPwr;
        this.magic = magicPwr;
        this.level = level;
        this.id = id;
    }
    //Atk
    get eqpAtk() {
        return this.atk;
    }
    set putEqpAtk(newAtkPwr) {
        this.atk = newAtkPwr;
    }
    //Def
    get eqpDef() {
        return this.def;
    }
    set putEqpDef(newDefPwr) {
        this.def = newDefPwr;
    }
    //Magic
    get eqpMagic() {
        return this.magic;
    }
    set putEqpMagic(newMagicPwr) {
        this.magic = newMagicPwr;
    }
    //Level
    get eqpLvl() {
        return this.level;
    }
    set putEqpLvl(newLevel) {
        this.level = newLevel;
    }
}
