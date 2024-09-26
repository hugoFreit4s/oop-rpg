const container = document.getElementById('app_container');
export default class UI {
    static renderScreen(p, e, s) {
        container.innerHTML = '';
        this.generateTopDivHTMLElements(p, e);
        this.generateBattleHTMLElements(p, e);
        this.generateInventoryHTMLElements(p, e, s);
        this.generateShopHTMLElements(p, e, s);
    }
    static generateTopDivHTMLElements(p, e) {
        //Exp percentage calc
        const levelPercentage = (p.playerExpAmount / p.playerRequiredExp) * 100;
        //Level and Gold div
        const topDiv = document.createElement('div');
        topDiv.classList.add('top_div');
        //Gold div
        const goldDiv = document.createElement('div');
        const goldAmountElement = document.createElement('p');
        goldAmountElement.innerText = `Gold: ${p.entityGoldAmount}`;
        goldDiv.appendChild(goldAmountElement);
        //Level div
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('life_div');
        const levelElement = document.createElement('p');
        levelElement.innerText = `Level: ${p.playerLevel.toString()}`;
        const experienceBar = document.createElement('div'); // Problemas aqui
        experienceBar.classList.add('life_bar_div');
        const levelBarBg = document.createElement('div');
        levelBarBg.classList.add('life_bar_bg');
        const currentLevelBar = document.createElement('div');
        currentLevelBar.classList.add('life_div');
        currentLevelBar.classList.add('bar');
        currentLevelBar.style.width = `${levelPercentage}%`;
        experienceBar.appendChild(levelBarBg);
        experienceBar.appendChild(currentLevelBar);
        levelDiv.appendChild(experienceBar);
        levelDiv.appendChild(levelElement); //HELP😭
        currentLevelBar.style.border = levelPercentage <= 0 ? '0px' : '1px solid black';
        // topDiv.appendChild(levelElement);
        topDiv.appendChild(levelDiv);
        topDiv.appendChild(goldDiv);
        // topDiv.appendChild(statsDiv);
        container.appendChild(topDiv);
    }
    static generateBattleHTMLElements(p, e) {
        //Life percentage calc
        const playerLifePercentage = (p.entityHp / p.entityMaxHp) * 100;
        const enemyLifePercentage = (e.entityHp / e.entityMaxHp) * 100;
        //Messages div
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg_div');
        msgDiv.id = 'message_container';
        const messageElement = document.createElement('p');
        messageElement.id = 'message';
        msgDiv.appendChild(messageElement);
        const lifebarDiv = document.createElement('div');
        lifebarDiv.classList.add('life_bar_div');
        //Player lifebar
        const playerLifeDiv = document.createElement('div');
        playerLifeDiv.classList.add('life_div');
        const playerNameElement = document.createElement('p');
        playerNameElement.innerText = p.entityName;
        const playerLifebarBg = document.createElement('div');
        playerLifebarBg.classList.add('life_bar_bg');
        const playerCurrentLifeDiv = document.createElement('div');
        playerCurrentLifeDiv.classList.add('life_div');
        playerCurrentLifeDiv.classList.add('bar');
        playerCurrentLifeDiv.style.width = `${playerLifePercentage}%`;
        playerLifeDiv.appendChild(playerNameElement);
        playerLifeDiv.appendChild(playerLifebarBg);
        playerLifeDiv.appendChild(playerCurrentLifeDiv);
        //Enemy lifebar
        const enemyLifeDiv = document.createElement('div');
        enemyLifeDiv.classList.add('life_div');
        const enemyNameElement = document.createElement('p');
        enemyNameElement.innerText = e.entityName;
        const enemyLifebarBg = document.createElement('div');
        enemyLifebarBg.classList.add('life_bar_bg');
        const enemyCurrentLifeDiv = document.createElement('div');
        enemyCurrentLifeDiv.classList.add('life_div');
        enemyCurrentLifeDiv.classList.add('bar');
        enemyCurrentLifeDiv.style.width = `${enemyLifePercentage}%`;
        enemyLifeDiv.appendChild(enemyNameElement);
        enemyLifeDiv.appendChild(enemyLifebarBg);
        enemyLifeDiv.appendChild(enemyCurrentLifeDiv);
        playerCurrentLifeDiv.style.border = playerLifePercentage <= 0 ? '0px' : '1px solid black';
        enemyCurrentLifeDiv.style.border = enemyLifePercentage <= 0 ? '0px' : '1px solid black';
        //Append to lifebarDiv
        lifebarDiv.appendChild(playerLifeDiv);
        lifebarDiv.appendChild(enemyLifeDiv);
        //Append to main div
        container.appendChild(msgDiv);
        container.appendChild(lifebarDiv);
    }
    static generateInventoryHTMLElements(p, e, s) {
        //Equiped items
        const equipedItemsDiv = document.createElement('div');
        equipedItemsDiv.classList.add('equiped_items_div');
        const equipedWeaponDiv = document.createElement('div');
        const equipedWeaponElement = document.createElement('p');
        equipedWeaponElement.innerText = p.playerWeapon === null ? "No weapons equiped!" : `Equiped weapon: ${p.playerWeapon.itemName}`;
        const unequipWeaponBtn = document.createElement('button');
        unequipWeaponBtn.innerText = 'Unequip';
        unequipWeaponBtn.addEventListener('click', () => {
            p.unequipItem(p.playerWeapon);
            this.renderScreen(p, e, s);
        });
        unequipWeaponBtn.style.display = p.playerWeapon === null ? 'none' : 'show';
        equipedWeaponDiv.appendChild(equipedWeaponElement);
        equipedWeaponDiv.appendChild(unequipWeaponBtn);
        const equipedArmorDiv = document.createElement('div');
        const equipedArmorElement = document.createElement('p');
        equipedArmorElement.innerText = p.playerArmor === null ? "No armor equiped" : `Equiped armor: ${p.playerArmor.itemName}`;
        const unequipArmornBtn = document.createElement('button');
        unequipArmornBtn.innerText = 'Unequip';
        unequipArmornBtn.addEventListener('click', () => {
            p.unequipItem(p.playerArmor);
            this.renderScreen(p, e, s);
        });
        unequipArmornBtn.style.display = p.playerArmor === null ? 'none' : 'show';
        equipedArmorDiv.appendChild(equipedArmorElement);
        equipedArmorDiv.appendChild(unequipArmornBtn);
        equipedItemsDiv.appendChild(equipedWeaponDiv);
        equipedItemsDiv.appendChild(equipedArmorDiv);
        //Open inventory
        let openned = false;
        const inventoryDiv = document.createElement('div');
        inventoryDiv.classList.add('inventory_div');
        const openInventoryBtn = document.createElement('button');
        openInventoryBtn.innerText = 'Open inventory';
        openInventoryBtn.style.width = '100px';
        openInventoryBtn.addEventListener('click', () => {
            const opennedInvDiv = document.createElement('div');
            opennedInvDiv.classList.add('openned_inv_div');
            inventoryDiv.appendChild(opennedInvDiv);
            openned = !openned;
            console.log(openned);
            if (openned) {
                openInventoryBtn.innerText = 'Close inventory';
                if (p.playerInventory.length >= 1) {
                    p.playerInventory.forEach(x => {
                        const itemDiv = document.createElement('div');
                        itemDiv.classList.add('item_div');
                        const itemNameElement = document.createElement('p');
                        itemNameElement.innerText = x.itemName;
                        const itemLevelElement = document.createElement('p');
                        itemLevelElement.innerText = `Level: ${x.eqpLvl}`;
                        const itemAttributesDiv = document.createElement('div');
                        const itemAttackElement = document.createElement('p');
                        itemAttackElement.innerText = `Attack power: ${x.atk}`;
                        const itemDefElement = document.createElement('p');
                        itemDefElement.innerText = `Defense power: ${x.def}`;
                        const itemMagicElement = document.createElement('p');
                        itemMagicElement.innerText = `Magic power: ${x.magic}`;
                        const itemValueElement = document.createElement('p');
                        itemValueElement.innerText = `Value: ${x.itemValue}`;
                        const eqpItemBtn = document.createElement('button');
                        eqpItemBtn.innerText = 'Equip item';
                        eqpItemBtn.addEventListener('click', () => {
                            p.equipItem(x);
                            this.renderScreen(p, e, s);
                        });
                        const sellItemBtn = document.createElement('button');
                        sellItemBtn.innerText = 'Sell';
                        sellItemBtn.addEventListener('click', () => {
                            p.sellEquipment(x);
                            this.renderScreen(p, e, s);
                        });
                        itemAttributesDiv.appendChild(itemAttackElement);
                        itemAttributesDiv.appendChild(itemDefElement);
                        itemAttributesDiv.appendChild(itemMagicElement);
                        itemAttributesDiv.appendChild(itemValueElement);
                        itemDiv.appendChild(itemNameElement);
                        itemDiv.appendChild(itemLevelElement);
                        itemDiv.appendChild(itemAttributesDiv);
                        itemDiv.appendChild(eqpItemBtn);
                        itemDiv.appendChild(sellItemBtn);
                        opennedInvDiv.appendChild(itemDiv);
                    });
                }
                else {
                    const emptyInvMsg = document.createElement('p');
                    emptyInvMsg.innerText = 'Empty!';
                    opennedInvDiv.appendChild(emptyInvMsg);
                }
            }
            else {
                openInventoryBtn.innerText = 'Open inventory';
                inventoryDiv.innerHTML = '';
                inventoryDiv.appendChild(openInventoryBtn);
            }
        }); //Problemas ao re-renderizar a tela neste ponto (booleano 'openned')!!!!!
        inventoryDiv.appendChild(openInventoryBtn);
        container.appendChild(equipedItemsDiv);
        container.appendChild(inventoryDiv);
    }
    static generateShopHTMLElements(p, e, s) {
        //Shop
        const shopDiv = document.createElement('div');
        shopDiv.classList.add('inventory_div');
        const oppenShopBtn = document.createElement('button');
        let openned = false;
        oppenShopBtn.innerText = 'Shop';
        oppenShopBtn.style.marginTop = '320px';
        oppenShopBtn.addEventListener('click', () => {
            openned = !openned;
            const equipmentsToSellDiv = document.createElement('div');
            equipmentsToSellDiv.classList.add('eqp_to_sell_div');
            if (openned) {
                s.equipmentsToBuy.forEach((x) => {
                    const equipmentDiv = document.createElement('div');
                    equipmentDiv.classList.add('eqp_to_sell');
                    const eqpNameElement = document.createElement('p');
                    eqpNameElement.innerText = `Name: ${x.itemName}`;
                    const eqpValueElement = document.createElement('p');
                    eqpValueElement.innerText = `Value: ${x.itemValue}`;
                    const buyEqpButton = document.createElement('button');
                    buyEqpButton.innerText = 'Buy equipment';
                    buyEqpButton.addEventListener('click', () => {
                        s.buyEquipment(x, p);
                        this.renderScreen(p, e, s);
                    });
                    equipmentDiv.appendChild(eqpNameElement);
                    equipmentDiv.appendChild(eqpValueElement);
                    equipmentDiv.appendChild(buyEqpButton);
                    equipmentsToSellDiv.appendChild(equipmentDiv);
                });
                shopDiv.appendChild(equipmentsToSellDiv);
            }
            else {
                this.renderScreen(p, e, s);
            }
        });
        shopDiv.appendChild(oppenShopBtn);
        //Append to appDiv
        container.appendChild(shopDiv);
    }
    static generateStatsHTMLElements(p, e, s) {
        //Stats div
        const statsDiv = document.createElement('div');
        const atkPwrElement = document.createElement('p');
        atkPwrElement.innerText = `Attack power: ${p.entityAtkPwr}`;
        const defPwrElement = document.createElement('p');
        defPwrElement.innerText = `Defense power: ${p.entityDef}`;
        statsDiv.appendChild(atkPwrElement);
        statsDiv.appendChild(defPwrElement);
    }
    static generateBattleMessages(p, e, moment) {
        const msgDiv = document.getElementById('message_container');
        const messageElement = document.getElementById('message');
        switch (moment) {
            case 'start':
                messageElement.innerText = 'Battle!';
                break;
            case 'attack':
                messageElement.innerText = '';
        }
        msgDiv?.appendChild(messageElement);
    }
    static setBattleMessage(message) {
        const messageElement = document.getElementById('message');
        messageElement.innerText = message;
    }
}
