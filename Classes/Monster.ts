import Entity from "./Entity.js";

export default class Monster extends Entity{
    race: 'Orc' | 'Troll' | 'Human';
    constructor(mHp: number, hp: number, atk: number, def: number, name: string, race: 'Orc' | 'Troll' | 'Human'){
        super(mHp, hp, atk, def, name);
        this.race = race;
    }

    emitirSomDeAtaque(): void{
        console.log('atk monster');
    }

    droparExp(): void {
        if(this.hp > 0) return;

    }

    respawnMonster(){
        this.hp = this.maxHp;
    }
}