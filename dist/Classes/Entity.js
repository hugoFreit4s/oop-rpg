export default class Entity {
    maxHp;
    hp;
    strength;
    def;
    name;
    constructor(mHp, hp, atk, def, name) {
        this.maxHp = mHp;
        this.hp = hp;
        this.strength = atk;
        this.def = def;
        this.name = name;
    }
}
