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
}
