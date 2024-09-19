import Monster from './dist/Monster.js';
import Player from './dist/Player.js'

const player = new Player(50, 50, 6, 1, 'Eu');
//mHp, hp, atk, def, name

function turno(p) {
    let m = new Monster(2, 10, 10, 2, 1, 'Rat', 'Human');
    //xpLoot, mHp, hp, atk, def, name, race
    while (p.hp > 0) {
        p.attackSound();
        m.getDamage(p.strength, p);
        p.getDamage(m.strength);
        if(m.hp <= 0) {
            m = new Monster(2, 10, 10, 2, 1, 'Rat', 'Human');
            console.log('Defeated!!!');
        }
    }
    console.log(m.hp)
}
turno(player);