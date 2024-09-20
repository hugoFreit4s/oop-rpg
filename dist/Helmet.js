import Equipment from "./Equipment.js";
export default class Helmet extends Equipment {
    constructor(name, atk, def, magic, level, equipped) {
        super("Elmo", atk, def, magic, level, equipped, "Helmet");
    }
}
