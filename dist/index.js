import Enemy from "./Classes/Enemy.js";
import Player from "./Classes/Player.js";
import Helper from "./Classes/Helper.js";
import UI from "./Classes/UI.js";
import Weapon from "./Classes/Weapon.js";
import Armor from "./Classes/Armor.js";
import Shop from "./Classes/Shop.js";
import StringBuilder from "./Classes/StringBuilder.js";
import { weaponFactory, Weapons } from "./Classes/EquipmentFactory.js";
let p = new Player(30, 30, 5, 3, 'Eu');
let e = new Enemy(10, 10, 5, 2, 'Kashrt', 3, 'Orc', [weaponFactory(Weapons.IRON_SWORD)], Helper.generateRandomIntNumber(10));
const shop = new Shop([new Weapon('Gold Sword', 5, 2, 0, 1, '1', 35), new Weapon('Enchanted Sword', 3, 2, 7, 1, '2', 35), new Armor('Diamond Armor', 1, 20, 0, 1, '3', 120)]);
const attackBtn = document.getElementById('atk_btn');
UI.renderScreen(p, e, shop);
UI.generateBattleMessages(p, e, 'start');
attackBtn?.addEventListener('click', () => {
    // executeTurn();
    const dmg = Helper.calcDamage(e.entityAtkPwr, p.entityDef);
    const enemyDmg = Helper.calcDamage(p.entityAtkPwr, e.entityDef);
    let string = new StringBuilder();
    p.getDmg(dmg);
    e.getDmg(enemyDmg);
    if (p.entityHp > 0 && e.entityHp > 0) {
        UI.renderScreen(p, e, shop);
        string.setString(Helper.getDamageMessage(dmg, e)).concatLn(Helper.getDamageMessage(enemyDmg, p));
    }
    else if (e.entityHp === 0) {
        string.setString(`${e.entityName} defeated! DROP: ${e.xpLoot}XP, ${e.loot[0].itemName} AND ${e.entityGoldAmount} GOLD\nYour XP: ${p.playerExpAmount}`);
        const races = ['Orc', 'Troll', 'Human']; // To do
        Helper.transferLootToPlayer(e, e.entityGoldAmount, p);
        const randomMaxHP = Helper.generateRandomIntNumber(10);
        const hp = randomMaxHP;
        const randomStrength = Helper.generateRandomIntNumber(10);
        const randomDef = Helper.generateRandomIntNumber(5);
        const randomName = Helper.generateRandomString(5, 'Lower');
        const randomXpLoot = Helper.generateRandomIntNumber(5);
        const randomGoldAmount = Helper.generateRandomIntNumber(10);
        e = new Enemy(randomMaxHP, hp, randomStrength, randomDef, randomName, randomXpLoot, 'Orc', [new Armor('Steel Armor', 0, 3, 0, 1, crypto.randomUUID(), Helper.generateRandomIntNumber(5))], randomGoldAmount);
        p.increasePlayerExpAmount(e.xpLoot);
        string.concatLn(`New enemy: ${e.entityName} --- HP: ${e.entityHp} / ${e.entityMaxHp}`).build();
        UI.renderScreen(p, e, shop);
    }
    else if (p.entityHp === 0) {
        UI.renderScreen(p, e, shop);
        string.setString(`DEFEATED! HP: ${p.entityHp} / ${p.entityMaxHp}`);
    }
    UI.setBattleMessage(string.build());
});
function sum(...arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
class Breno {
    name;
    age;
    address;
    constructor(pessoa) {
        this.name = pessoa.name;
        this.age = pessoa.age;
        this.address = pessoa.address;
    }
}
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
