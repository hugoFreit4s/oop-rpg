import HTMLBuilder from "./Builders/HTMLBuilder.js";
import Bar from "./Elements/Bar.js";
import Enemy from "./Enemy.js";
import Player from "./Player.js";
import Shop from "./Shop.js";

const container = document.getElementById('app_container');

export default class UI {
    static renderScreen(p: Player, e: Enemy, s: Shop) {

        container!.innerHTML = '';
        this.renderBarsAndGold(p, e);
        this.renderMessageContainer();
        this.renderInventory(p, e, s);
        this.createShopModal(p, e, s);
    }

    static renderBarsAndGold(p: Player, e: Enemy) {
        const playerPercentage = (p.entityHp / p.entityMaxHp) * 100;
        const expPercentage = (p.playerExpAmount / p.entityMaxHp) * 100;
        const enemyPercentage = (e.entityHp / e.entityMaxHp) * 100;

        const playerBar = new Bar().setWidth(playerPercentage).getBar();
        const expBar = new Bar().setWidth(expPercentage).setBarColor('blue').getBar();
        const enemyBar = new Bar().setWidth(enemyPercentage).getBar();
        const lifeBarsDiv = new HTMLBuilder('div').addClass('bars-container').addChildren(playerBar, enemyBar).build();
        const expBarDiv = new HTMLBuilder('div').addClass('exp-bar-container').addChildren(expBar).build();

        const goldDiv = new HTMLBuilder('div').addText(p.entityGoldAmount.toLocaleString("en-US", { style: "currency", currency: "USD" })).build();

        const topContainer = new HTMLBuilder('div').addClass('top-container').addChildren(lifeBarsDiv, expBarDiv, goldDiv).build();
        container?.appendChild(topContainer);
    }

    static renderMessageContainer(): void {
        container?.appendChild(new HTMLBuilder('div').addClass('battle-message-container').addId('battle-message-container').build());
    }

    static renderBattleMessage(textContent: string): void {
        const msgContainer = document.getElementById('battle-message-container');
        msgContainer?.appendChild(new HTMLBuilder('p').addText(textContent).build());
    }

    static renderInventory(p: Player, e: Enemy, s: Shop): void {
        const openBtn = new HTMLBuilder('button').addText('Open Inventory').addClass('open-btn').build();
        const closeBtn = new HTMLBuilder('button').addText('X').addClass('open-btn').addStyles('width: 40px;').build();
        const searchInp = new HTMLBuilder('input').build() as HTMLInputElement;
        const insideModalDiv = new HTMLBuilder('div').addClass('modal-content').build();

        searchInp.addEventListener('input', () => {
            insideModalDiv.innerHTML = '';
            p.playerInventory.forEach(x => {
                if (x.itemName.toLowerCase().includes(searchInp.value.toLowerCase())) {
                    const itemName = new HTMLBuilder('p').addText(x.itemName).addStyles('font-weight: 700;').build();
                    const itemAtk = new HTMLBuilder('p').addText(`Attack: ${x.atk.toString()}`).build();
                    const itemDef = new HTMLBuilder('p').addText(`Defense: ${x.def.toString()}`).build();
                    const itemVal = new HTMLBuilder('p').addText(`Value: ${x.itemValue.toLocaleString()}`).build();
                    const eqpBtn = new HTMLBuilder('button').addText(`Equip ${x.itemName}`).build();
                    eqpBtn.addEventListener('click', () => {
                        p.equipItem(x);
                        this.renderScreen(p, e, s);
                    });

                    const itemDiv = new HTMLBuilder('div').addChildren(itemName, itemAtk, itemDef, itemVal, eqpBtn).addClass('item-container').build();
                    console.log(itemDiv);
                    insideModalDiv.appendChild(itemDiv);
                }
            });
        });

        p.playerInventory.forEach(x => {
            const itemName = new HTMLBuilder('p').addText(x.itemName).addStyles('font-weight: 700;').build();
            const itemAtk = new HTMLBuilder('p').addText(`Attack: ${x.atk.toString()}`).build();
            const itemDef = new HTMLBuilder('p').addText(`Defense: ${x.def.toString()}`).build();
            const itemVal = new HTMLBuilder('p').addText(`Value: ${x.itemValue.toLocaleString()}`).build();
            const eqpBtn = new HTMLBuilder('button').addText(`Equip ${x.itemName}`).build();
            eqpBtn.addEventListener('click', () => {
                p.equipItem(x);
                this.renderScreen(p, e, s);
            });

            const itemDiv = new HTMLBuilder('div').addChildren(itemName, itemAtk, itemDef, itemVal, eqpBtn).addClass('item-container').build();
            console.log(itemDiv);
            insideModalDiv.appendChild(itemDiv);
        });
        const outsideModalDiv = new HTMLBuilder('div').addChildren(closeBtn, searchInp, insideModalDiv).addClass('modal-backdrop').build();

        openBtn.addEventListener('click', () => {
            outsideModalDiv.style.display = "flex";
        });

        closeBtn.addEventListener('click', () => {
            outsideModalDiv.style.display = "none";
        })

        const invContainer = new HTMLBuilder('div').addChildren(openBtn, outsideModalDiv).addClass('inv-container').build();
        container?.appendChild(invContainer);
    }

    static createShopModal(p: Player, e: Enemy, s: Shop): void {

    }
}