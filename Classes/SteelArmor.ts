import Armor from "./Armor.js";

export default class SteelArmor extends Armor {
    constructor() {
        super("Steel Armor", 0, 5, 0, 1, crypto.randomUUID(), "Armor");
    }
}