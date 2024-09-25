import Enemy from "./Classes/Enemy.js";
import Player from "./Classes/Player.js";
import Helper from "./Classes/Helper.js";
import UI from "./Classes/UI.js";
import Weapon from "./Classes/Weapon.js";
import Armor from "./Classes/Armor.js";
let p = new Player(30, 30, 5, 3, 'Eu');
let e = new Enemy(10, 10, 5, 2, 'Kashrt', 3, 'Orc', [new Weapon('WoodSword', 2, 0, 0, 1, crypto.randomUUID())]);
const attackBtn = document.getElementById('atk_btn');
UI.renderScreen(p, e);
UI.generateBattleMessages(p, e, 'start');
attackBtn?.addEventListener('click', () => {
    // executeTurn();
    if (p.hp > 0 && e.hp > 0) {
        let string = '';
        string += p.getDmg(Helper.calcDamage(e.atkPwr, p.def));
        string += "\n" + e.getDmg(Helper.calcDamage(p.atkPwr, e.def));
        UI.renderScreen(p, e);
        UI.setBattleMessage(string);
    }
    else if (e.hp === 0) {
        let message = `${e.name} defeated! DROP: ${e.xpLoot}XP AND ${e.loot[0].itemName}\nYour XP: ${p.playerExpAmount}`;
        const races = ['Orc', 'Troll', 'Human'];
        p.addToInventory(e.loot);
        const randomMaxHP = Helper.generateRandomIntNumber(10);
        const hp = randomMaxHP;
        const randomStrength = Helper.generateRandomIntNumber(10);
        const randomDef = Helper.generateRandomIntNumber(5);
        const randomName = Helper.generateRandomString(5, 'Lower');
        const randomXpLoot = Helper.generateRandomIntNumber(5);
        const randomRace = races[Helper.generateRandomIntNumber(2)];
        e = new Enemy(randomMaxHP, hp, randomStrength, randomDef, randomName, randomXpLoot, 'Orc', [new Armor('Steel Sword', 4, 1, 0, 1, crypto.randomUUID())]);
        p.increasePlayerExpAmount(e.xpLoot);
        message += `\nNew enemy: ${e.name} --- HP: ${e.hp} / ${e.maxHp}`;
        UI.renderScreen(p, e);
        UI.setBattleMessage(message);
    }
    else if (p.hp === 0) {
        UI.renderScreen(p, e);
        UI.setBattleMessage(`DEFEATED! HP: ${p.hp} / ${p.maxHp}`);
    }
});
// function turn(player: Player) {
//     let enemy = new Enemy(10, 10, 4, 2, 'Blest', 2, 'Troll', [new WoodArmor]);
//     function executeTurn() {
//         if (p.hp > 0 && enemy.hp > 0) {
//             console.log(`\n----New Game----\nYour HP: ${Helper.showHp(p)}\nEnemy HP: ${Helper.showHp(enemy)}`);
//             player.getDmg(Helper.calcDamage(enemy.atkPwr, player.def));
//             enemy.getDmg(Helper.calcDamage(player.atkPwr, enemy.def));
//             // setTimeout(executeTurn, 1000);
//         } else if (enemy.hp === 0) {
//             p.increasePlayerExpAmount(enemy.xpLoot);
//             Helper.transferLootToPlayer(enemy.eqpLoot, p);
//             enemy = new Enemy(13, 13, 4, 3, 'Yuwek', 5, 'Orc', [new WoodSword]);
//             console.log(`You won!\nNew enemy: ${enemy.name} -- HP: ${Helper.showHp(enemy)}`);
//             setTimeout(executeTurn, 2000);
//         }
//     }
//     executeTurn();
// }
// turn(p);
