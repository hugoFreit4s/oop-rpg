import Weapon from "./Weapon.js";
export var Weapons;
(function (Weapons) {
    Weapons[Weapons["IRON_SWORD"] = 1] = "IRON_SWORD";
    Weapons[Weapons["GOLD_SWORD"] = 2] = "GOLD_SWORD";
})(Weapons || (Weapons = {}));
export function weaponFactory(weaponType) {
    switch (weaponType) {
        case Weapons.IRON_SWORD:
            return new Weapon('Iron Sword', 3, 0, 0, 1, crypto.randomUUID(), 10);
        case Weapons.GOLD_SWORD:
            return new Weapon('Gold Sword', 5, 0, 0, 1, crypto.randomUUID(), 15);
        default:
            return new Weapon('Paper Sword', 0, 0, 0, 0, crypto.randomUUID(), 0);
    }
}
