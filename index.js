import Monster from "./dist/Monster.js";
import Player from "./dist/Player.js";

const mob = new Monster(10, 10, 3, 1, "Rat", "Human");
const p = new Player(50, 50, 3, 1, "Eu");

function turno(p, m) {
    p.setExp(1);

    const damageOnMonster = p.atk - m.def;
    m.hp -= damageOnMonster;
    console.log(`Monstro sofreu um ataque de ${damageOnMonster} de dano!`);
    console.log(`Monster HP: ${m.hp}/${m.maxHp}`);

    const damageOnPlayer = m.atk - p.def;
    p.hp -= damageOnPlayer;
    console.log(`Player sofreu um ataque de ${damageOnPlayer} de dano!`);
    console.log(`Player HP: ${p.hp}/${p.maxHp}`);

    console.log(`XP obtido: 1\nXP do Player: ${p.getExp()}`);

    if(p.exp === 10){
        p.increaseLevel();
        console.log(`Level aumentado! Stats + 1. Novos Stats:\nHP Máximo: ${p.maxHp}\nAtaque: ${p.atk}\nDefesa: ${p.def}\nHP Restaurado! HP:${p.hp}`);
    }

    if(m.hp <= 0){
        console.log(`Monstro derrotado!`);
        m.respawnMonster();
    }
}

turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);
turno(p, mob);