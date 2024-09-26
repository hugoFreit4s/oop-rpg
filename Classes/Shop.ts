import Equipment from "./Equipment";
import Player from "./Player";

export default class Shop {
    equipmentsToBuy: Array<Equipment>;
    constructor(equipments: Array<Equipment>) {
        this.equipmentsToBuy = equipments;
    }

    buyEquipment(eqp: Equipment, buyer: Player): void | string {
        if (buyer.entityGoldAmount < eqp.itemValue) {
            return 'Not enough gold';
        } else if (buyer.playerInventory.length >= 10) {
            return 'Inventory is full!';
        } else {
            buyer.addToInventory([eqp]);
            const tempArr: Array<Equipment> = [];
            this.equipmentsToBuy.map(x => {
                if (x.id !== eqp.id) tempArr.push(x);
            });
            buyer.decreaseGoldAmount = eqp.itemValue;
            this.equipmentsToBuy = [...tempArr];
        }
    }
}