export default class UI {
    static renderScreen(p, e) {
        const container = document.getElementById('app_container');
        container.innerHTML = '';
        container?.appendChild(this.generateHTMLElements(p, e));
    }
    static generateHTMLElements(p, e) {
        //Life percentage calc
        const playerLifePercentage = (p.hp / p.maxHp) * 100;
        const enemyLifePercentage = (e.hp / e.maxHp) * 100;
        //External div
        const appDiv = document.createElement('div');
        appDiv.classList.add('app_div');
        //Messages div
        const msgDiv = document.createElement('div');
        msgDiv.id = 'message_container';
        const messageElement = document.createElement('p');
        messageElement.id = 'message';
        msgDiv.appendChild(messageElement);
        //Attack button
        const attackBtn = document.createElement('button');
        attackBtn.innerText = 'Attack!';
        //Player lifebar
        const playerLifebarDiv = document.createElement('div');
        playerLifebarDiv.classList.add('life_bar');
        const playerLifebarBg = document.createElement('div');
        playerLifebarBg.classList.add('lifebar_bg');
        const playerCurrentLifeDiv = document.createElement('div');
        playerCurrentLifeDiv.classList.add('pcurrent_lifebar');
        playerCurrentLifeDiv.style.width = `${playerLifePercentage}%`;
        //Enemy lifebar
        const enemyLifebarDiv = document.createElement('div');
        enemyLifebarDiv.classList.add('life_bar');
        enemyLifebarDiv.classList.add('enemy_lifebar');
        const enemyLifebarBg = document.createElement('div');
        enemyLifebarBg.classList.add('lifebar_bg');
        const enemyCurrentLifeDiv = document.createElement('div');
        enemyCurrentLifeDiv.classList.add('pcurrent_lifebar');
        enemyCurrentLifeDiv.style.width = `${enemyLifePercentage}%`;
        //Append to enemyLifebarDiv
        enemyLifebarDiv.appendChild(enemyLifebarBg);
        enemyLifebarDiv.appendChild(enemyCurrentLifeDiv);
        //Append to playerLifebarDiv
        playerLifebarDiv.appendChild(playerLifebarBg);
        playerLifebarDiv.appendChild(playerCurrentLifeDiv);
        //Append to appDiv
        appDiv.appendChild(msgDiv);
        appDiv.appendChild(playerLifebarDiv);
        appDiv.appendChild(enemyLifebarDiv);
        return appDiv;
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
