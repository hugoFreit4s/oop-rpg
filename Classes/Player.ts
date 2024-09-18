import Entity from "./Entity.js";

export default class Player extends Entity {
    private exp: number;
    private level: number;
    constructor(mHp: number, hp: number, atk: number, def: number, name: string) {
        super(mHp, hp, atk, def, name);
        this.exp = 0;
        this.level = 1;
    }

    emitirSomDeAtaque(): void {
        console.log('atk player');
    }

    setExp(value: number): void {
        this.exp += value;
    }

    getExp(): number {
        return this.exp;
    }

    increaseLevel(): void {
        this.level += 1;
        this.maxHp += 1;
        this.hp = this.maxHp;
        this.atk += 1;
        this.def += 1;
    }

    getLevel(): number {
        return this.level;
    }
}