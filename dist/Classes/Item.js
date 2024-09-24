export default class Item {
    name;
    constructor(name) {
        this.name = name;
    }
    set putItemName(newName) {
        this.name = newName;
    }
    get itemName() {
        return this.name;
    }
}
