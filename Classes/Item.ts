export default abstract class Item {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    set putEquipmentName(newName: string){
        this.name = newName;
    }
    
    get equipmentName(): string {
        return this.name;
    }
}