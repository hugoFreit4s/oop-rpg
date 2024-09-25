export default class Entity {
    maxHp;
    hp;
    atkPwr;
    def;
    name;
    gold;
    constructor(mHp, hp, atk, def, name, gold) {
        this.maxHp = mHp;
        this.hp = hp;
        this.atkPwr = atk;
        this.def = def;
        this.name = name;
        this.gold = gold;
    }
    get entityMaxHp() {
        return this.maxHp;
    }
    set putMaxHp(newMaxHp) {
        this.maxHp = newMaxHp;
    }
    get entityHp() {
        return this.hp;
    }
    set putHp(newHp) {
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
    set putDef(newDef) {
        this.def = newDef;
    }
    get entityName() {
        return this.name;
    }
    set putName(newName) {
        this.name = newName;
    }
    get entityGoldAmount() {
        return this.gold;
    }
    set putGoldAmount(amount) {
        this.gold = amount;
    }
    set increaseGoldAmount(amount) {
        this.gold += amount;
    }
    set decreaseGoldAmount(amount) {
        this.gold -= amount;
    }
}
