import Monster from './dist/Monster.js';
import Player from './dist/Player.js'

const player = new Player(50, 50, 3, 1, 'Eu');
//mHp, hp, atk, def, name

function turno(p) {
    const m = new Monster(5, 10, 10, 3, 1, 'Rat', 'Human');
    //xpLoot, mHp, hp, atk, def, name, race
    p.attackSound();
    m.getDamage(p.atk, p);
    p.getDamage(m.atk);
}
turno(player);