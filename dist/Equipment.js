export default class Equipment {
    name;
    atk;
    def;
    magic;
    level;
    equiped;
    constructor(name, atkPwr, defPwr, magicPwr, level) {
        this.name = name;
        this.atk = atkPwr;
        this.def = defPwr;
        this.magic = magicPwr;
        this.level = level;
        this.equiped = false;
    }
}
