export default abstract class Equipment {
    name: string
    atk: number;
    def: number;
    magic: number;
    level: number;
    equipped: boolean;
    category: "Meele" | "Helmet" | "Armor";
    constructor(name: string, atkPwr: number, defPwr: number, magicPwr: number, level: number, equipped: boolean, category: "Meele" | "Helmet" | "Armor"){
        this.name = name;
        this.atk = atkPwr;
        this.def = defPwr;
        this.magic = magicPwr;
        this.level = level;
        this.equipped = equipped;
        this.category = category;
    }
}