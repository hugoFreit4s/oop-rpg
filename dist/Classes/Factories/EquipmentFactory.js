import Armor from "../Armor.js";
import Weapon from "../Weapon.js";
export var WeaponsENUM;
(function (WeaponsENUM) {
    WeaponsENUM[WeaponsENUM["WOOD_SWORD"] = 1] = "WOOD_SWORD";
    WeaponsENUM[WeaponsENUM["IRON_SWORD"] = 2] = "IRON_SWORD";
    WeaponsENUM[WeaponsENUM["GOLD_SWORD"] = 3] = "GOLD_SWORD";
    WeaponsENUM[WeaponsENUM["DIAMOND_SWORD"] = 4] = "DIAMOND_SWORD";
})(WeaponsENUM || (WeaponsENUM = {}));
export var ArmorsENUM;
(function (ArmorsENUM) {
    ArmorsENUM[ArmorsENUM["WOOD_ARMOR"] = 1] = "WOOD_ARMOR";
    ArmorsENUM[ArmorsENUM["IRON_ARMOR"] = 2] = "IRON_ARMOR";
    ArmorsENUM[ArmorsENUM["GOLD_ARMOR"] = 3] = "GOLD_ARMOR";
    ArmorsENUM[ArmorsENUM["DIAMOND_ARMOR"] = 4] = "DIAMOND_ARMOR";
})(ArmorsENUM || (ArmorsENUM = {}));
export function weaponFactory(weaponType) {
    switch (weaponType) {
        case WeaponsENUM.WOOD_SWORD:
            return new Weapon('Wood Sword', 2, 0, 0, 1, crypto.randomUUID(), 2);
        case WeaponsENUM.IRON_SWORD:
            return new Weapon('Iron Sword', 4, 0, 0, 1, crypto.randomUUID(), 4);
        case WeaponsENUM.GOLD_SWORD:
            return new Weapon('Gold Sword', 6, 0, 0, 1, crypto.randomUUID(), 10);
        case WeaponsENUM.DIAMOND_SWORD:
            return new Weapon('Diamond Sword', 10, 2, 0, 1, crypto.randomUUID(), 35);
        default:
            return new Weapon('Void Sword', 0, 0, 0, 0, crypto.randomUUID(), 0);
    }
}
export function armorFactory(armorType) {
    switch (armorType) {
        case ArmorsENUM.WOOD_ARMOR:
            return new Armor('Wood Armor', 0, 2, 0, 1, crypto.randomUUID(), 2);
        case ArmorsENUM.IRON_ARMOR:
            return new Armor('Iron Armor', 0, 4, 0, 1, crypto.randomUUID(), 4);
        case ArmorsENUM.GOLD_ARMOR:
            return new Armor('Gold Armor', 0, 6, 0, 1, crypto.randomUUID(), 10);
        case ArmorsENUM.DIAMOND_ARMOR:
            return new Armor('Diamond Armor', 0, 10, 0, 1, crypto.randomUUID(), 35);
        default:
            return new Armor('Void Armor', 0, 0, 0, 0, crypto.randomUUID(), 0);
    }
}
