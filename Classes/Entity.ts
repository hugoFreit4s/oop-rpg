export default abstract class Entity {
    maxHp: number;
    hp: number;
    atkPwr: number;
    def: number;
    name: string;
    constructor(mHp: number, hp: number, atk: number, def: number, name: string) {
        this.maxHp = mHp;
        this.hp = hp;
        this.atkPwr = atk;
        this.def = def;
        this.name = name;
    }

    abstract getDmg(dmg: number): void;

    get entityMaxHp(): number {
        return this.entityMaxHp;
    }
    set putEntityMaxHp(newMaxHp: number) {
        this.maxHp = newMaxHp;
    }

    get entityHp(): number {
        return this.hp;
    }
    set putEntityHp(newHp: number) {
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
    set putEntityDef(newDef: number) {
        this.def = newDef;
    }

    get entityName(): string {
        return this.name;
    }
    set putEntityName(newName: string) {
        this.name = newName;
    }
}