import StringBuilder from "./Builders/StringBuilder.js";
import Enemy from "./Enemy.js";
import Entity from "./Entity.js";
import Equipment from "./Equipment";
import Player from "./Player.js";

export default class Helper {
    static calcDamage(atk: number, def: number) {
        const damage = (atk - def) < 0 ? 0 : atk - def;
        return damage;
    }

    static showHp(character: Player | Enemy) {
        return `${character.entityHp} / ${character.entityMaxHp}`;
    }

    static transferLootToPlayer(enemy: Enemy, enemyGoldLoot: number, player: Player): void {
        player.addToInventory(...enemy.loot);
        player.increaseGoldAmount = enemyGoldLoot;
        enemy.decreaseGoldAmount = enemy.entityGoldAmount;
    }

    static generateRandomIntNumber(limit: number): number {
        return Math.floor(Math.random() * limit);
    }

    static generateRandomString(numberOfCharacters: number, capitalization: 'Upper' | 'Lower'): string {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        if (numberOfCharacters > 0) {
            for (let i = 0; i < numberOfCharacters; i++) {
                result += characters.charAt(this.generateRandomIntNumber(characters.length));
            }
        }
        return result;
    }

    static getDamageMessage(dmg: number, entity: Entity) {
        return new StringBuilder().setString(`Damage: ${dmg} --- ${entity.entityName} HP: ${entity.entityHp} / ${entity.entityMaxHp}`).build();
    }
}