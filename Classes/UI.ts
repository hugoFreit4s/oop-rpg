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
        const playerLifePercentage = (p.hp / p.maxHp) * 100;
        const enemyLifePercentage = (e.hp / e.maxHp) * 100;
        const levelPercentage = (p.playerExpAmount / p.playerRequiredExp) * 100;

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
        levelDiv.appendChild(levelElement);

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

        //Append to playerLifebarDiv
        playerLifebarDiv.appendChild(playerNameElement);
        playerLifebarDiv.appendChild(playerLifebarBg);
        playerLifebarDiv.appendChild(playerCurrentLifeDiv);
        //Append to enemyLifebarDiv
        enemyLifebarDiv.appendChild(enemyNameElement);
        enemyLifebarDiv.appendChild(enemyLifebarBg);
        enemyLifebarDiv.appendChild(enemyCurrentLifeDiv);
        //Append to appDiv
        container!.appendChild(levelDiv);
        container!.appendChild(msgDiv);
        container!.appendChild(playerLifebarDiv);
        container!.appendChild(enemyLifebarDiv);
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