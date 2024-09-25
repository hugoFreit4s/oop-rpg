export default class Item {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    set putName(newName) {
        this.name = newName;
    }
    get itemName() {
        return this.name;
    }
    set putValue(newValue) {
        this.value = newValue;
    }
    get itemValue() {
        return this.value;
    }
}
