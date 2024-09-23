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
}