const MAX_PLAYER_ATTACK = 10;
const MAX_MONSTER_ATTACK = 12;
let MaxLife = 100;
let playerCurrentLife = MaxLife;
let monsterCurrentLife = MaxLife;

adjustHealthBars(MaxLife);

attackBtn.addEventListener("click", attackHandler);

function attackHandler() {
  const monsterHit = dealMonsterDamage(MAX_PLAYER_ATTACK);
  monsterCurrentLife -= monsterHit;
  const fireBack = dealPlayerDamage(MAX_MONSTER_ATTACK);
  playerCurrentLife -= fireBack;
  if (playerCurrentLife <= 0 && monsterCurrentLife > 0) {
    alert("LOSER HAHAHAHA");
  } else if (monsterCurrentLife <= 0 && playerCurrentLife > 0) {
    alert("WAY TO GO CHAMP");
  } else if (monsterCurrentLife <= 0 && playerCurrentLife <= 0) {
    alert("Draw");
  }
}
