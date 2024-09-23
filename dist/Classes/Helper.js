export default class Helper {
    static calcDamage(atk, def) {
        const damage = (atk - def) < 0 ? 0 : atk - def;
        return damage;
    }
    static showHp(character) {
        return `${character.hp} / ${character.maxHp}`;
    }
    static transferLootToPlayer(enemyLoot, player) {
        player.addToInventory(enemyLoot);
    }
}
