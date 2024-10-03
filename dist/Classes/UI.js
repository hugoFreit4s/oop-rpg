import HTMLBuilder from "./Builders/HTMLBuilder.js";
import Bar from "./Elements/Bar.js";
const container = document.getElementById('app_container');
export default class UI {
    static renderScreen(p, e, s) {
        container.innerHTML = '';
        this.renderMessageContainer();
        this.renderBarsAndGold(p, e);
        this.renderInventory(p, e, s);
        this.createShopModal(p, e, s);
    }
    static renderBarsAndGold(p, e) {
        const playerPercentage = (p.entityHp / p.entityMaxHp) * 100;
        const expPercentage = (p.playerExpAmount / p.entityMaxHp) * 100;
        const enemyPercentage = (e.entityHp / e.entityMaxHp) * 100;
        const expBar = new Bar().setWidth(expPercentage).setBarColor('blue').buildBar();
        const playerBar = new Bar().setWidth(playerPercentage).buildBar();
        const pLifeText = new HTMLBuilder('p').addText(`${p.entityName} life: ${p.entityHp} / ${p.entityMaxHp}`).build();
        const playerBarDiv = new HTMLBuilder('div').addChildren(pLifeText, playerBar).build();
        const enemyBar = new Bar().setWidth(enemyPercentage).buildBar();
        const eLifeText = new HTMLBuilder('p').addText(`${e.entityName} life: ${e.entityHp} / ${e.entityMaxHp}`).build();
        const enemyBarDiv = new HTMLBuilder('div').addChildren(eLifeText, enemyBar).build();
        const lifeBarsDiv = new HTMLBuilder('div').addClass('bars-container').addChildren(playerBarDiv, enemyBarDiv).build();
        const expAmount = new HTMLBuilder('p').addClass('exp-amount').addText(`XP: ${p.playerExpAmount} / ${p.entityMaxHp}`).build();
        const playerLvl = new HTMLBuilder('p').addClass('player-lvl').addText(`Level: ${p.playerLevel}`).build();
        const levelTexts = new HTMLBuilder('div').addStyles('display: flex; flex-direction: column; line-height: 0; align-items: left').addChildren(playerLvl, expAmount).build();
        const expContainer = new HTMLBuilder('div').addClass('exp-container').addChildren(levelTexts, expBar).addClass('exp-container').build();
        const goldText = new HTMLBuilder('p').addText(`Gold amount: ${p.entityGoldAmount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}`).addStyles('').build();
        const topContainer = new HTMLBuilder('div').addClass('top-container').addChildren(goldText, lifeBarsDiv, expContainer).build();
        container?.appendChild(topContainer);
    }
    static renderMessageContainer() {
        container?.appendChild(new HTMLBuilder('div').addClass('battle-message-container').addId('battle-message-container').build());
    }
    static renderBattleMessage(textContent) {
        const msgContainer = document.getElementById('battle-message-container');
        const battleTextDiv = new HTMLBuilder('div').addText(textContent).addClass('battle-txt-container').build();
        msgContainer?.appendChild(battleTextDiv);
    }
    static renderInventory(p, e, s) {
        const openBtn = new HTMLBuilder('button').addText('Open Inventory').addClass('open-btn').build();
        const closeBtn = new HTMLBuilder('button').addText('X').addClass('open-btn').addStyles('width: 40px;').build();
        const searchInp = new HTMLBuilder('input').build();
        const topDivModal = new HTMLBuilder('div').addClass('modal-top').addChildren(searchInp, closeBtn).build();
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
        const outsideModalDiv = new HTMLBuilder('div').addChildren(topDivModal, insideModalDiv).addClass('modal-backdrop').build();
        openBtn.addEventListener('click', () => {
            searchInp.value = '';
            // outsideModalDiv.style.display = "flex";
            outsideModalDiv.style.opacity = '1';
            outsideModalDiv.style.pointerEvents = 'initial';
        });
        closeBtn.addEventListener('click', () => {
            outsideModalDiv.style.opacity = "0";
            outsideModalDiv.style.pointerEvents = 'none';
        });
        const invContainer = new HTMLBuilder('div').addChildren(openBtn, outsideModalDiv).addClass('inv-container').build();
        container?.appendChild(invContainer);
    }
    static createShopModal(p, e, s) {
    }
}
