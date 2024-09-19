export default abstract class Entity {
    maxHp: number;
    hp: number;
    strength: number;
    def: number;
    name: string;
    constructor(mHp: number, hp: number, atk: number, def: number, name: string){
        this.maxHp = mHp;
        this.hp = hp;
        this.strength = atk;
        this.def = def;
        this.name = name;
    }

    abstract attackSound(): void;
}