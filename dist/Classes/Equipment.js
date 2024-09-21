export default class Equipment {
    name;
    atk;
    def;
    magic;
    level;
    equipped;
    category;
    constructor(name, atkPwr, defPwr, magicPwr, level, equipped, category) {
        this.name = name;
        this.atk = atkPwr;
        this.def = defPwr;
        this.magic = magicPwr;
        this.level = level;
        this.equipped = equipped;
        this.category = category;
    }
}
