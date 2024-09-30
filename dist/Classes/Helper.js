import StringBuilder from "./Builders/StringBuilder.js";
export default class Helper {
    static calcDamage(atk, def) {
        const damage = (atk - def) < 0 ? 0 : atk - def;
        return damage;
    }
    static showHp(character) {
        return `${character.entityHp} / ${character.entityMaxHp}`;
    }
    static transferLootToPlayer(enemy, enemyGoldLoot, player) {
        player.addToInventory(...enemy.loot);
        player.increaseGoldAmount = enemyGoldLoot;
        enemy.decreaseGoldAmount = enemy.entityGoldAmount;
    }
    static generateRandomIntNumber(limit) {
        return Math.floor(Math.random() * limit);
    }
    static generateRandomString(numberOfCharacters, capitalization) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        if (numberOfCharacters > 0) {
            for (let i = 0; i < numberOfCharacters; i++) {
                result += characters.charAt(this.generateRandomIntNumber(characters.length));
            }
        }
        return result;
    }
    static getDamageMessage(dmg, entity) {
        return new StringBuilder().setString(`Damage: ${dmg} --- ${entity.entityName} HP: ${entity.entityHp} / ${entity.entityMaxHp}`).build();
    }
}
