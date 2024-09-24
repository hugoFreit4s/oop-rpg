import Enemy from "./Enemy";
import Equipment from "./Equipment";
import Player from "./Player";

export default class Helper {
    static calcDamage(atk: number, def: number) {
        const damage = (atk - def) < 0 ? 0 : atk - def;
        return damage;
    }

    static showHp(character: Player | Enemy) {
        return `${character.hp} / ${character.maxHp}`;
    }

    static transferLootToPlayer(enemyLoot: Array<Equipment>, player: Player): void {
        player.addToInventory(enemyLoot);
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
}