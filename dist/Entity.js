export default class Entity {
    maxHp;
    hp;
    atk;
    def;
    name;
    constructor(mHp, hp, atk, def, name) {
        this.maxHp = mHp;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.name = name;
    }
}
