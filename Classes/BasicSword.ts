import Equipment from "./Equipment.js";

export default class BasicSword extends Equipment {
    constructor(name: string, atk: number, def: number, magic: number, level: number){
        super(name, atk, def, magic, level);
    }
}