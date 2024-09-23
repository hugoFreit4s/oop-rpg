import Enemy from "./Classes/Enemy.js";
import Player from "./Classes/Player.js";
import Helper from "./Classes/Helper.js";
import WoodArmor from "./Classes/WoodArmor.js";
import WoodSword from "./Classes/WoodSword.js";
let p = new Player(30, 30, 5, 3, 'Eu');
function turn(player) {
    let drop = new WoodArmor();
    console.log(drop);
    let enemy = new Enemy(10, 10, 4, 2, 'Blest', 2, 'Troll', [drop]);
    function executeTurn() {
        if (p.hp > 0 && enemy.hp > 0) {
            console.log(`\n----New Game----\nYour HP: ${Helper.showHp(p)}\nEnemy HP: ${Helper.showHp(enemy)}`);
            player.getDmg(Helper.calcDamage(enemy.atkPwr, player.def));
            enemy.getDmg(Helper.calcDamage(player.atkPwr, enemy.def));
            // setTimeout(executeTurn, 1000);
        }
        else if (enemy.hp === 0) {
            p.increasePlayerExpAmount(enemy.xpLoot);
            Helper.transferLootToPlayer(enemy.eqpLoot, p);
            enemy = new Enemy(13, 13, 4, 3, 'Yuwek', 5, 'Orc', [new WoodSword]);
            console.log(`You won!\nNew enemy: ${enemy.name} -- HP: ${Helper.showHp(enemy)}`);
            setTimeout(executeTurn, 2000);
        }
    }
    executeTurn();
}
turn(p);
