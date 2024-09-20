import Equipment from "./Equipment.js";
export default class BasicSword extends Equipment {
    constructor(name, atk, def, magic, level, equipped) {
        super(name, atk, def, magic, level, equipped, "Meele");
    }
}
