import Enemy from "./Classes/Enemy.js";
import Player from "./Classes/Player.js";
import Helper from "./Classes/Helper.js";
import UI from "./Classes/UI.js";
import Shop from "./Classes/Shop.js";
import StringBuilder from "./Classes/Builders/StringBuilder.js";
import { armorFactory, ArmorsENUM, weaponFactory, WeaponsENUM } from "./Classes/Factories/EquipmentFactory.js";
let p = new Player(20, 20, 5, 3, 'Eu');
let e = new Enemy(10, 10, 5, 2, 'Kashrt', 3, 'Orc', [weaponFactory(WeaponsENUM.WOOD_SWORD)], Helper.generateRandomIntNumber(10));
const shop = new Shop(weaponFactory(WeaponsENUM.WOOD_SWORD), weaponFactory(WeaponsENUM.IRON_SWORD), weaponFactory(WeaponsENUM.GOLD_SWORD), weaponFactory(WeaponsENUM.DIAMOND_SWORD), armorFactory(ArmorsENUM.WOOD_ARMOR), armorFactory(ArmorsENUM.IRON_ARMOR), armorFactory(ArmorsENUM.GOLD_ARMOR), armorFactory(ArmorsENUM.DIAMOND_ARMOR));
const attackBtn = document.getElementById('atk_btn');
UI.renderScreen(p, e, shop);
UI.renderBattleMessage(new StringBuilder().setString(`Your HP: ${p.entityHp} / ${p.entityMaxHp}`).concatLn(`Enemy: ${e.entityName}`).concatLn(`Enemy life: ${e.entityHp} / ${e.entityMaxHp}`).build());
let message = new StringBuilder();
attackBtn?.addEventListener('click', () => {
    // executeTurn();
    const dmgTaken = Helper.calcDamage(e.entityAtkPwr, p.entityDef);
    const dmgGiven = Helper.calcDamage(p.entityAtkPwr, e.entityDef);
    p.getDmg(dmgTaken);
    e.getDmg(dmgGiven);
    if (p.entityHp > 0 && e.entityHp > 0) {
        UI.renderScreen(p, e, shop);
        message.setString(Helper.getDamageMessage(dmgTaken, e)).concatLn(Helper.getDamageMessage(dmgGiven, p));
    }
    else if (e.entityHp === 0) {
        message.setString(`${e.entityName} defeated! DROP: ${e.xpLoot}XP, ${e.loot[0].itemName} AND ${e.entityGoldAmount} GOLD\nYour XP: ${p.playerExpAmount}`);
        const races = ['Orc', 'Troll', 'Human'];
        Helper.transferLootToPlayer(e, e.entityGoldAmount, p);
        const randomMaxHP = Helper.generateRandomIntNumber(10);
        const hp = randomMaxHP;
        const randomStrength = Helper.generateRandomIntNumber(10);
        const randomDef = Helper.generateRandomIntNumber(5);
        const randomName = Helper.generateRandomString(5, 'Lower');
        const randomXpLoot = Helper.generateRandomIntNumber(5);
        const randomGoldAmount = Helper.generateRandomIntNumber(10);
        e = new Enemy(randomMaxHP, hp, randomStrength, randomDef, randomName, randomXpLoot, 'Orc', [armorFactory(ArmorsENUM.WOOD_ARMOR)], randomGoldAmount);
        p.increasePlayerExpAmount(e.xpLoot);
        message.concatLn(`New enemy: ${e.entityName} --- HP: ${e.entityHp} / ${e.entityMaxHp}`);
        UI.renderScreen(p, e, shop);
        // UI.setBattleMessage(message);
    }
    else if (p.entityHp === 0) {
        UI.renderScreen(p, e, shop);
        message.setString(`DEFEATED! HP: ${p.entityHp} / ${p.entityMaxHp}`);
    }
    UI.renderBattleMessage(message.build());
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
