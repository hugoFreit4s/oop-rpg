import Enemy from "./Enemy";
import Player from "./Player";

export default class UI {
    static renderScreen(p: Player, e: Enemy) {
        const container = document.getElementById('app_container');
        container!.innerHTML = '';
        this.generateHTMLElements(p, e);
    }

    static generateHTMLElements(p: Player, e: Enemy) {
        const container = document.getElementById('app_container');
        //Life percentage calc
        const playerLifePercentage = (p.entityHp / p.entityMaxHp) * 100;
        const enemyLifePercentage = (e.entityHp / e.entityMaxHp) * 100;
        const levelPercentage = (p.playerExpAmount / p.playerRequiredExp) * 100;

        //Gold div
        const goldDiv = document.createElement('div');
        const goldAmountElement = document.createElement('p');
        goldAmountElement.innerText = `Gold: ${p.entityGoldAmount}`;
        goldDiv.appendChild(goldAmountElement);

        //Messages div
        const msgDiv = document.createElement('div');
        msgDiv.id = 'message_container';
        const messageElement = document.createElement('p');
        messageElement.id = 'message'
        msgDiv.appendChild(messageElement);

        //Level div
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('level_div');
        const levelElement = document.createElement('p');
        const experienceBar = document.createElement('div');
        experienceBar.classList.add('life_bar');
        const levelBarBg = document.createElement('div');
        levelBarBg.classList.add('bar_bg');
        const currentLevelBar = document.createElement('div');
        currentLevelBar.classList.add('level_bar');
        currentLevelBar.style.width = `${levelPercentage}%`
        levelElement.innerText = p.playerLevel.toString();
        experienceBar.appendChild(levelBarBg);
        experienceBar.appendChild(currentLevelBar);
        levelDiv.appendChild(experienceBar);
        levelDiv.appendChild(levelElement); //HELP😭

        //Attack button
        const attackBtn = document.createElement('button');
        attackBtn.innerText = 'Attack!';

        //Player lifebar
        const playerLifebarDiv = document.createElement('div');
        playerLifebarDiv.classList.add('life_bar');
        const playerNameElement = document.createElement('p');
        playerNameElement.innerText = p.entityName;
        const playerLifebarBg = document.createElement('div');
        playerLifebarBg.classList.add('bar_bg');
        const playerCurrentLifeDiv = document.createElement('div');
        playerCurrentLifeDiv.classList.add('current_life_lifebar');
        playerCurrentLifeDiv.classList.add('level_bar');
        playerCurrentLifeDiv.style.width = `${playerLifePercentage}%`;

        //Enemy lifebar
        const enemyLifebarDiv = document.createElement('div');
        enemyLifebarDiv.style.marginTop = '20px';
        enemyLifebarDiv.classList.add('life_bar');
        const enemyNameElement = document.createElement('p');
        enemyNameElement.innerText = e.entityName;
        const enemyLifebarBg = document.createElement('div');
        enemyLifebarBg.classList.add('bar_bg');
        const enemyCurrentLifeDiv = document.createElement('div');
        enemyCurrentLifeDiv.classList.add('current_life_lifebar');
        enemyCurrentLifeDiv.classList.add('level_bar');
        enemyCurrentLifeDiv.style.width = `${enemyLifePercentage}%`;

        enemyCurrentLifeDiv.style.border = enemyLifePercentage <= 0 ? '0px' : '1px solid black';
        playerCurrentLifeDiv.style.border = playerLifePercentage <= 0 ? '0px' : '1px solid black';

        //Equiped items
        const equipedItemsDiv = document.createElement('div');
        const equipedWeaponDiv = document.createElement('div');
        const equipedWeaponElement = document.createElement('p');
        equipedWeaponElement.innerText = p.playerWeapon === null ? "No weapons equiped!" : `Equiped weapon: ${p.playerWeapon.itemName}`;
        const unequipWeaponBtn = document.createElement('button');
        unequipWeaponBtn.innerText = 'Unequip';
        unequipWeaponBtn.addEventListener('click', () => {
            p.unequipItem(p.playerWeapon!);
            this.renderScreen(p, e);
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
            p.unequipItem(p.playerArmor!);
            this.renderScreen(p, e);
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
        openInventoryBtn.innerText = 'Open inventory'
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
                            this.renderScreen(p, e);
                        });

                        const sellItemBtn = document.createElement('button');
                        sellItemBtn.innerText = 'Sell';
                        sellItemBtn.addEventListener('click', () => {
                            p.sellEquipment(x);
                            this.renderScreen(p, e);
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
                } else {
                    const emptyInvMsg = document.createElement('p');
                    emptyInvMsg.innerText = 'Empty!';
                    opennedInvDiv.appendChild(emptyInvMsg);
                }
            } else {
                openInventoryBtn.innerText = 'Open inventory';
                inventoryDiv.innerHTML = '';
                inventoryDiv.appendChild(openInventoryBtn);
            }
        }); //Problemas ao re-renderizar a tela neste ponto (booleano 'openned')!!!!!

        inventoryDiv.appendChild(openInventoryBtn);

        //Append to playerLifebarDiv
        playerLifebarDiv.appendChild(playerNameElement);
        playerLifebarDiv.appendChild(playerLifebarBg);
        playerLifebarDiv.appendChild(playerCurrentLifeDiv);
        //Append to enemyLifebarDiv
        enemyLifebarDiv.appendChild(enemyNameElement);
        enemyLifebarDiv.appendChild(enemyLifebarBg);
        enemyLifebarDiv.appendChild(enemyCurrentLifeDiv);
        //Append to appDiv
        container!.appendChild(goldDiv);
        container!.appendChild(levelDiv);
        container!.appendChild(msgDiv);
        container!.appendChild(playerLifebarDiv);
        container!.appendChild(enemyLifebarDiv);
        container!.appendChild(equipedItemsDiv);
        container!.appendChild(inventoryDiv);
    }

    static generateBattleMessages(p: Player, e: Enemy, moment: 'start' | 'attack' | 'enemyDefeated' | 'playerDefeated') {
        const msgDiv = document.getElementById('message_container');
        const messageElement = document.getElementById('message');
        switch (moment) {
            case 'start':
                messageElement!.innerText = 'Battle!';
                break;
            case 'attack':
                messageElement!.innerText = ''
        }
        msgDiv?.appendChild(messageElement!);
    }

    static setBattleMessage(message: string): void {
        const messageElement = document.getElementById('message');
        messageElement!.innerText = message;
    }
}