export default class Entity {
    maxHp;
    hp;
    atkPwr;
    def;
    name;
    constructor(mHp, hp, atk, def, name) {
        this.maxHp = mHp;
        this.hp = hp;
        this.atkPwr = atk;
        this.def = def;
        this.name = name;
    }
    get entityMaxHp() {
        return this.entityMaxHp;
    }
    set putEntityMaxHp(newMaxHp) {
        this.maxHp = newMaxHp;
    }
    get entityHp() {
        return this.hp;
    }
    set putEntityHp(newHp) {
        this.hp = newHp;
    }
    get entityAtkPwr() {
        return this.atkPwr;
    }
    set putAtkPwr(newAtkPwr) {
        this.atkPwr = newAtkPwr;
    }
    get entityDef() {
        return this.def;
    }
    set putEntityDef(newDef) {
        this.def = newDef;
    }
    get entityName() {
        return this.name;
    }
    set putEntityName(newName) {
        this.name = newName;
    }
}
