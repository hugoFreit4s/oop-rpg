export default class Item {
    name;
    constructor(name) {
        this.name = name;
    }
    set putEquipmentName(newName) {
        this.name = newName;
    }
    get equipmentName() {
        return this.name;
    }
}
