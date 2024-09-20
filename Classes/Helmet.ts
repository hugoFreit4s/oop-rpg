import Equipment from "./Equipment.js";

export default class Helmet extends Equipment {
    constructor(name: string, atk: number, def: number, magic: number, level: number, equipped: boolean){
        super("Elmo", atk, def, magic, level, equipped, "Helmet");
    }
}