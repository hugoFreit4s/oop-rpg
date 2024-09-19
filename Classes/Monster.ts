import Entity from "./Entity.js";
import Player from "./Player.js";

export default class Monster extends Entity{
    race: 'Orc' | 'Troll' | 'Human';
    xpLoot: number;
    constructor(xpLoot: number, mHp: number, hp: number, atk: number, def: number, name: string, race: 'Orc' | 'Troll' | 'Human'){
        super(mHp, hp, atk, def, name);
        this.race = race;
        this.xpLoot = xpLoot;
    }

    attackSound(): void{
        console.log('atk monster');
    }

    getDamage(atkPwr: number, p: Player): void{
        const damage = atkPwr - this.def;
        if(this.hp - damage <= 0) {
            this.hp = 0;
            this.dropExp(p);
        } else {
            this.hp -= damage;
        }
        console.log(`MONSTER HP: ${this.hp} / ${this.maxHp}`)
    }

    dropExp(p: Player){
        p.increaseExp(this.xpLoot);
        console.log(`${this.name} dropped ${this.xpLoot} XP\nPlayer XP ${p.getExpAmount()}`);
    }
}