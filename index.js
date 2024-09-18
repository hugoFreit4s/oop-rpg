import Monster from './dist/Monster.js';
import Player from './dist/Player.js';

const main = document.getElementById('main');
const atkBtn = document.getElementById('atk_btn');
const p = new Player(50, 50, 3, 1, 'Eu');
const m = new Monster(10, 10, 5, 1, 'Rat', 'Human');

// render();
function render() {
    main.innerHTML = '';
    createElements();
}

function createElements() {
    const divLifeBarPlayer = document.createElement('div');
    divLifeBarPlayer.classList.add('life_bar');
    const div1Player = document.createElement('div');
    div1Player.classList.add('life_bar_bg');
    const div2Player = document.createElement('div');
    div2Player.id = 'pcurrent_life_bar';

    divLifeBarPlayer.appendChild(div1Player);
    divLifeBarPlayer.appendChild(div2Player);

    const divLifeBarMonster = document.createElement('div');
    divLifeBarMonster.classList.add('life_bar', 'monster_life_bar');
    const div1Monster = document.createElement('div');
    div1Monster.classList.add('life_bar_bg');
    const div2Monster = document.createElement('div');
    div2Monster.id = 'mcurrent_life_bar';

    divLifeBarMonster.appendChild(div1Monster);
    divLifeBarMonster.appendChild(div2Monster);

    const messageElement = document.createElement('p');
    messageElement.id = 'message_text';
    const levelElement = document.createElement('p');
    levelElement.id = 'level_text';
    levelElement.innerText = 1;

    main.appendChild(divLifeBarPlayer);
    main.appendChild(divLifeBarMonster);
    main.appendChild(messageElement);
    main.appendChild(levelElement);
}

const pLifeBar = document.getElementById('pcurrent_life_bar');
const mLifeBar = document.getElementById('mcurrent_life_bar');
const levelBar = document.getElementById('current_level_bar');
const message = document.getElementById('message_text');
const level = document.getElementById('level_text');

atkBtn.addEventListener('click', () => {
    p.increaseExp(1);

    const damageOnMonster = p.atk - m.def;
    m.hp -= damageOnMonster;
    const mLifeBarPercentage = (m.hp / m.maxHp) * 100;
    mLifeBar.style.width = `${mLifeBarPercentage.toString()}%`;

    console.log(`Monster HP: ${m.hp}/${m.maxHp}`);

    const damageOnPlayer = m.atk - p.def;
    p.hp -= damageOnPlayer;
    const pLifeBarPercentage = (p.hp / p.maxHp) * 100;
    pLifeBar.style.width = `${pLifeBarPercentage.toString()}%`;

    setColorBar(pLifeBarPercentage, mLifeBarPercentage);

    console.log(`Player sofreu um ataque de ${damageOnPlayer} de dano!`);
    console.log(`Player HP: ${p.hp}/${p.maxHp}`);
    message.innerText = `${m.name} sofreu um ataque de ${damageOnMonster} de dano!\n${p.name} sofreu um ataque de ${damageOnPlayer} de dano!`;

    console.log(`XP obtido: 1\nXP do Player: ${p.getExp()}`);
    const levelPercentage = (p.getExp() / p.requiredExp) * 100;
    levelBar.style.width = `${levelPercentage}%`
    levelBar.style.backgroundColor = 'green'
    level.innerText = p.getLevel();
    console.log(`Barra de EXP: ${p.exp}/${p.requiredExp}`);

    if (p.exp >= p.requiredExp) {
        p.increaseLevel();
        p.setExp(0);
        level.innerText = p.getLevel();
        p.refreshRequiredExp();
        console.log(`Level aumentado! Stats + 1. Novos Stats:\nHP Máximo: ${p.maxHp}\nAtaque: ${p.atk}\nDefesa: ${p.def}\nHP Restaurado! HP:${p.hp}`);
    }

    if (m.hp <= 0) {
        console.log('Monstro derrotado!');
        mLifeBar.style.width = '100%';
        m.respawnMonster();
        setColorBar(pLifeBarPercentage, 100);
    }
});

function setColorBar(pPercentage, mPercentage) {
    let playerBarColor;
    let monsterBarColor;

    if (pPercentage > 60) {
        playerBarColor = '#00FF00';
    } else if (pPercentage > 30) {
        playerBarColor = '#A3FF00';
    } else {
        playerBarColor = '#FFFF00';
    }

    if (mPercentage > 60) {
        monsterBarColor = '#00FF00';
    } else if (mPercentage > 30) {
        monsterBarColor = '#A3FF00';
    } else {
        monsterBarColor = '#FFFF00';
    }

    pLifeBar.style.backgroundColor = playerBarColor;
    mLifeBar.style.backgroundColor = monsterBarColor;
}