export default abstract class Entity {
    private maxHp: number;
    private hp: number;
    private atkPwr: number;
    private def: number;
    private name: string;
    private gold: number;
    constructor(mHp: number, hp: number, atk: number, def: number, name: string, gold: number) {
        this.maxHp = mHp;
        this.hp = hp;
        this.atkPwr = atk;
        this.def = def;
        this.name = name;
        this.gold = gold;
    }

    abstract getDmg(dmg: number): void;

    get entityMaxHp(): number {
        return this.maxHp;
    }
    set putMaxHp(newMaxHp: number) {
        this.maxHp = newMaxHp;
    }

    get entityHp(): number {
        return this.hp;
    }
    set putHp(newHp: number) {
        this.hp = newHp;
    }

    get entityAtkPwr(): number {
        return this.atkPwr;
    }
    set putAtkPwr(newAtkPwr: number) {
        this.atkPwr = newAtkPwr;
    }

    get entityDef(): number {
        return this.def;
    }
    set putDef(newDef: number) {
        this.def = newDef;
    }

    get entityName(): string {
        return this.name;
    }
    set putName(newName: string) {
        this.name = newName;
    }

    get entityGoldAmount(): number {
        return this.gold;
    }
    set putGoldAmount(amount: number) {
        this.gold = amount;
    }
    set increaseGoldAmount(amount: number) {
        this.gold += amount;
    }
    set decreaseGoldAmount(amount: number) {
        this.gold -= amount;
    }
}