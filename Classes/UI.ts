import HTMLBuilder from "./Builders/HTMLBuilder.js";
import Bar from "./Elements/Bar.js";
import Enemy from "./Enemy.js";
import Player from "./Player.js";
import Shop from "./Shop.js";

const container = document.getElementById('app_container');

export default class UI {
    static renderScreen(p: Player, e: Enemy, s: Shop) {
        container!.innerHTML = '';
        this.renderBars(p, e);
        this.renderMessageContainer();
        this.renderInventory(p, e, s);
    }

    static renderBars(p: Player, e: Enemy) {
        const playerPercentage = (p.entityHp / p.entityMaxHp) * 100;
        const enemyPercentage = (e.entityHp / e.entityMaxHp) * 100;

        const playerBar = new Bar().setWidth(playerPercentage).getBar();
        const enemyBar = new Bar().setWidth(enemyPercentage).getBar();

        const barsDiv = new HTMLBuilder('div').addClass('bars-container').addChildren(playerBar, enemyBar).build();
        container?.appendChild(barsDiv);
    }

    static renderMessageContainer(): void {
        container?.appendChild(new HTMLBuilder('div').addClass('battle-message-container').addId('battle-message-container').build());
    }

    static renderBattleMessage(textContent: string): void {
        const msgContainer = document.getElementById('battle-message-container');
        msgContainer?.appendChild(new HTMLBuilder('p').addText(textContent).build());
    }

    static renderInventory(p: Player, e: Enemy, s: Shop): void {
        const openInventoryBtn = new HTMLBuilder('button').addText('Open Inventory').addStyles('padding: 5px 25px 5px 25px; border: 1px solid rgba(128, 128, 128, 0.672); border-radius: 4px; cursor: pointer;').build();
        const allItemsContainer = new HTMLBuilder('div').addClass('all-items-container').build();
        const inventoryContainer = new HTMLBuilder('div').addClass('inventory-container').addChildren(openInventoryBtn, allItemsContainer).build();
        let inventoryOpenned = false;
        openInventoryBtn.addEventListener('click', () => {
            inventoryOpenned = !inventoryOpenned;
            if (inventoryOpenned) {
                openInventoryBtn.textContent = 'Close Inventory'
                if (p.playerInventory.length <= 0) {
                    allItemsContainer.textContent = 'Empty inventory';
                } else {
                    p.playerInventory.forEach(x => {
                        const itemName = new HTMLBuilder('p').addText(x.itemName).addStyles('font-weight:700;').build();
                        const itemAtk = new HTMLBuilder('p').addText(`Attack power: ${x.eqpAtk.toString()}`).build();
                        const itemDef = new HTMLBuilder('p').addText(`Defense power: ${x.eqpDef.toString()}`).build();
                        const itemValue = new HTMLBuilder('p').addText(`Value: ${x.itemValue.toLocaleString("en-US", { style: "currency", currency: "USD" })}`).build();
                        const itemStats = new HTMLBuilder('div').addChildren(itemAtk, itemDef, itemValue).addClass('items-stats').build();
                        const equipButton = new HTMLBuilder('button').addText('Equip item!').addClass('inventory-buttons').build();
                        equipButton.addEventListener('click', () => {
                            p.equipItem(x);
                        });
                        const sellButton = new HTMLBuilder('button').addText('Sell item!').addClass('inventory-buttons').build();
                        sellButton.addEventListener('click', () => {
                            p.sellEquipment(x);
                            inventoryContainer.innerHTML = '';
                            this.renderInventory(p, e, s)
                        });
                        const itemContainer = new HTMLBuilder('div')
                            .addClass('item-container')
                            .addChildren(new HTMLBuilder('div').addChildren(itemName, itemStats, equipButton, sellButton).build())
                            .build();
                        allItemsContainer.appendChild(itemContainer);
                    });
                }
            } else {
                inventoryOpenned = false;
                openInventoryBtn.textContent = 'Open Inventory'
                allItemsContainer.innerHTML = '';
            }
        });

        container?.appendChild(inventoryContainer);
    }
}