import Armor from "../Armor.js";
import Weapon from "../Weapon.js";

export enum WeaponsENUM {
    WOOD_SWORD = 1,
    IRON_SWORD = 2,
    GOLD_SWORD = 3,
    DIAMOND_SWORD = 4
}

export enum ArmorsENUM {
    WOOD_ARMOR = 1,
    IRON_ARMOR = 2,
    GOLD_ARMOR = 3,
    DIAMOND_ARMOR = 4
}

export function weaponFactory(weaponType: WeaponsENUM) {
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

export function armorFactory(armorType: ArmorsENUM) {
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