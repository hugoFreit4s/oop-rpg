export default abstract class Equipment {
    name: string
    atk: number;
    def: number;
    magic: number;
    level: number;
    constructor(name: string, atkPwr: number, defPwr: number, magicPwr: number, level: number){
        this.name = name;
        this.atk = atkPwr;
        this.def = defPwr;
        this.magic = magicPwr;
        this.level = level;
    }
}