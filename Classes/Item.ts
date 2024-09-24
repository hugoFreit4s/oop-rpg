export default abstract class Item {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    set putItemName(newName: string){
        this.name = newName;
    }
    
    get itemName(): string {
        return this.name;
    }
}