import Monster from './dist/Monster.js';
import Player from './dist/Player.js';

const atkBtn = document.getElementById('atk_btn');
const pLifeBar = document.getElementById('pcurrent_life_bar');
const mLifeBar = document.getElementById('mcurrent_life_bar');
const p = new Player(50, 50, 3, 1, 'Eu');
const m = new Monster(10, 10, 5, 1, 'Rat', 'Human');

atkBtn.addEventListener('click', () => {
    p.setExp(1);

    const damageOnMonster = p.atk - m.def;
    m.hp -= damageOnMonster;
    const mLifeBarPercentage = (m.hp / m.maxHp) * 100;
    mLifeBar.style.width = `${mLifeBarPercentage.toString()}%`;

    console.log(`Monstro sofreu um ataque de ${damageOnMonster} de dano!`);
    console.log(`Monster HP: ${m.hp}/${m.maxHp}`);

    const damageOnPlayer = m.atk - p.def;
    p.hp -= damageOnPlayer;
    const pLifeBarPercentage = (p.hp / p.maxHp) * 100;
    pLifeBar.style.width = `${pLifeBarPercentage.toString()}%`;

    setColorBar(pLifeBarPercentage, mLifeBarPercentage);

    console.log(`Player sofreu um ataque de ${damageOnPlayer} de dano!`);
    console.log(`Player HP: ${p.hp}/${p.maxHp}`);

    console.log(`XP obtido: 1\nXP do Player: ${p.getExp()}`);
    console.log(`Barra de EXP: ${p.exp}/${p.requiredExp}`);

    if (p.exp >= p.requiredExp) {
        p.increaseLevel();
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
        monsterBarColor = "#00FF00";
    } else if (mPercentage > 30) {
        monsterBarColor = '#A3FF00';
    } else {
        monsterBarColor = '#FFFF00';
    }

    pLifeBar.style.backgroundColor = playerBarColor;
    mLifeBar.style.backgroundColor = monsterBarColor;
}