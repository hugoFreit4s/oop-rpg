import Enemy from "./Enemy";
import { weaponFactory, Weapons } from "./EquipmentFactory";
export var MonsterENUM;
(function (MonsterENUM) {
    MonsterENUM[MonsterENUM["RAT"] = 1] = "RAT";
    MonsterENUM[MonsterENUM["CRISTIANO_RONALDO"] = 2] = "CRISTIANO_RONALDO";
})(MonsterENUM || (MonsterENUM = {}));
export function monsterFactory(monsterType) {
    switch (monsterType) {
        case MonsterENUM.RAT: new Enemy(10, 10, 5, 2, 'Rat', 5, 'Troll', [weaponFactory(Weapons.IRON_SWORD)], 5);
        case MonsterENUM.CRISTIANO_RONALDO: new Enemy(1000, 1000, 1000, 1000, 'Cristiano', 500, 'Human', [weaponFactory(Weapons.GOLD_SWORD)], 1000);
    }
}
