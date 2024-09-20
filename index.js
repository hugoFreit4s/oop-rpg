import Monster from './dist/Monster.js';
import Player from './dist/Player.js';

let player = new Player(15, 15, 10, 3, 'Eu');
// mHp, hp, atk, def, name
function turn(p) {
    let m = new Monster(2, 10, 10, 5, 3, 'Rat', 'Human');
    // xpLoot, mHp, hp, atk, def, name, race

    function executeTurn() {
        if (p.hp > 0) {
            console.log("\n-----TURNO-----")
            m.getDamage(p.strength, p);
            p.getDamage(m.strength);

            if (m.hp <= 0) {
                console.log(`${m.name} foi derrotado!`);
                m = new Monster(2, 10, 10, 6, 1, 'Rat', 'Human');
            }

            console.log(`\nYour HP: ${p.hp} / ${p.getMaxHp()}\nENEMY HP: ${m.hp} / ${m.maxHp}`);

            setTimeout(executeTurn, 2000);
        } else {
            player = new Player(15, 15, 5, 3, 'Eu');
            turn(player);
        }
    }

    executeTurn();
}

turn(player);