export default class Shop {
    equipmentsToBuy;
    constructor(equipments) {
        this.equipmentsToBuy = equipments;
    }
    buyEquipment(eqp, buyer) {
        if (buyer.entityGoldAmount < eqp.itemValue) {
            return 'Not enough gold';
        }
        else if (buyer.playerInventory.length >= 10) {
            return 'Inventory is full!';
        }
        else {
            buyer.addToInventory([eqp]);
            const tempArr = [];
            this.equipmentsToBuy.map(x => {
                if (x.id !== eqp.id)
                    tempArr.push(x);
            });
            this.equipmentsToBuy = [...tempArr];
        }
    }
}
