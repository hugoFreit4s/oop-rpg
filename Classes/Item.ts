export default abstract class Item {
    private name: string;
    private value: number;
    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    set putName(newName: string) {
        this.name = newName;
    }
    get itemName(): string {
        return this.name;
    }

    set putValue(newValue: number) {
        this.value = newValue;
    }
    get itemValue(): number {
        return this.value;
    }
}