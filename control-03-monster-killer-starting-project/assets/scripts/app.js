const MAX_NORMAL_PLAYER_ATTACK = 10;
const MAX_MONSTER_ATTACK = 12;
const MAX_STRONG_PALYER_ATTACK = 14;
const HEAL_VALUE = 6;
const LOG_EVENT_ATTACK = "PLAYER ATTACK";
const LOG_EVENT_STRONG = "PLAYER STRONG ATTACK";
const LOG_EVENT_HEAL = "PLAYER HEAL";
const LOG_EVENT_MONSTER = "MONSTER ATTACK";
const LOG_EVENT_ENDGAME = "FINAL RESUTL";

let MaxLife;
let playerCurrentLife;
let monsterCurrentLife;
let hasBounesLife = true;
let logArray = [];

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
logBtn.addEventListener("click", logHandler);

function attackHandler() {
  hitMonster(MAX_NORMAL_PLAYER_ATTACK);
}

function strongAttackHandler() {
  hitMonster(MAX_STRONG_PALYER_ATTACK);
}

function healHandler() {
  let healvalue;
  if (playerCurrentLife + HEAL_VALUE >= MaxLife) {
    healvalue = MaxLife - playerCurrentLife;
  } else {
    healvalue = HEAL_VALUE;
  }
  increasePlayerHealth(healvalue);
  playerCurrentLife += healvalue;
  addToLog(LOG_EVENT_HEAL, healvalue, playerCurrentLife, monsterCurrentLife);
  endRound();
}

function logHandler() {
  for (const el of logArray) {
    for (const key in el) {
      console.log(key, " = ", el[key]);
    }
    console.log("=============================================");
  }
}

function hitMonster(attackValue) {
  const monsterHit = dealMonsterDamage(attackValue);
  monsterCurrentLife -= monsterHit;
  if (attackValue === MAX_NORMAL_PLAYER_ATTACK) {
    addToLog(
      LOG_EVENT_ATTACK,
      monsterHit,
      playerCurrentLife,
      monsterCurrentLife
    );
  } else {
    addToLog(
      LOG_EVENT_STRONG,
      monsterHit,
      playerCurrentLife,
      monsterCurrentLife
    );
  }
  endRound();
}

function endRound() {
  let matchState;
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
  addToLog(LOG_EVENT_MONSTER, fireBack, playerCurrentLife, monsterCurrentLife);
  if (playerCurrentLife <= 0 && monsterCurrentLife > 0) {
    alert("LOSER HAHAHAHA");
    matchState = "LOSER";
    addToLog(
      LOG_EVENT_ENDGAME,
      matchState,
      playerCurrentLife,
      monsterCurrentLife
    );
  } else if (monsterCurrentLife <= 0 && playerCurrentLife > 0) {
    alert("WAY TO GO CHAMP");
    matchState = "WINNER";
    addToLog(
      LOG_EVENT_ENDGAME,
      matchState,
      playerCurrentLife,
      monsterCurrentLife
    );
  } else if (monsterCurrentLife <= 0 && playerCurrentLife <= 0) {
    alert("Draw");
    matchState = "DRAW";
    addToLog(
      LOG_EVENT_ENDGAME,
      matchState,
      playerCurrentLife,
      monsterCurrentLife
    );
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

function addToLog(event, value, playerHealth, monsterHealth) {
  if (
    event !== LOG_EVENT_ATTACK &&
    event !== LOG_EVENT_STRONG &&
    event !== LOG_EVENT_MONSTER &&
    event !== LOG_EVENT_HEAL &&
    event !== LOG_EVENT_ENDGAME
  ) {
    return;
  }
  let logEntry = {
    event: event,
    value: value,
    playerHealth: playerHealth,
    monsterHealth: monsterHealth,
  };

  switch (event) {
    case LOG_EVENT_ATTACK:
    case LOG_EVENT_STRONG:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER:
      logEntry.target = "PLAYER";
      break;
  }
  logArray.push(logEntry);
}
