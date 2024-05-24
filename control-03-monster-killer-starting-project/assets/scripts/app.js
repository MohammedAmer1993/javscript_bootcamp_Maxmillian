const MAX_NORMAL_PLAYER_ATTACK = 10;
const MAX_MONSTER_ATTACK = 12;
const MAX_STRONG_PALYER_ATTACK = 14;
const HEAL_VALUE = 6;

let MaxLife;
let playerCurrentLife;
let monsterCurrentLife;
let hasBounesLife = true;

const initiallife = prompt("what is the life value", "100");
MaxLife = parseInt(initiallife);
if (isNaN(MaxLife) || MaxLife <= 0) {
  MaxLife = 100;
}

playerCurrentLife = MaxLife;
monsterCurrentLife = MaxLife;

adjustHealthBars(MaxLife);
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);

function attackHandler() {
  hitMonster(MAX_NORMAL_PLAYER_ATTACK);
}

function strongAttackHandler() {
  hitMonster(MAX_STRONG_PALYER_ATTACK);
}

function healHandler() {
  increasePlayerHealth(HEAL_VALUE);
  if (playerCurrentLife + HEAL_VALUE >= MaxLife) {
    playerCurrentLife = MaxLife;
  } else {
    playerCurrentLife += HEAL_VALUE;
  }
  endRound();
}

function hitMonster(attackValue) {
  const monsterHit = dealMonsterDamage(attackValue);
  monsterCurrentLife -= monsterHit;
  endRound();
}

function endRound() {
  let healthBeforeDeath = playerCurrentLife;
  const fireBack = dealPlayerDamage(MAX_MONSTER_ATTACK);
  playerCurrentLife -= fireBack;
  if (playerCurrentLife <= 0 && hasBounesLife) {
    playerCurrentLife = healthBeforeDeath;
    hasBounesLife = false;
    alert("You are lucky you have a bounes life");
    removeBonusLife();
    setPlayerHealth(healthBeforeDeath);
  }
  if (playerCurrentLife <= 0 && monsterCurrentLife > 0) {
    alert("LOSER HAHAHAHA");
  } else if (monsterCurrentLife <= 0 && playerCurrentLife > 0) {
    alert("WAY TO GO CHAMP");
  } else if (monsterCurrentLife <= 0 && playerCurrentLife <= 0) {
    alert("Draw");
  }
  if (playerCurrentLife <= 0 || monsterCurrentLife <= 0) {
    reset();
  }
}

function reset() {
  resetGame(MaxLife);
  playerCurrentLife = MaxLife;
  monsterCurrentLife = MaxLife;
}
