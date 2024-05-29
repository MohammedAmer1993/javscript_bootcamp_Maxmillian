const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_SELECTION = ROCK;

const WINNER = 1;
const LOSER = 2;
const DRAW = 3;

let isGameOn = false;

const getPlayerChoice = () => {
  const playerChoice = prompt("Make your choice", "").toUpperCase();
  if (
    playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSOR
  ) {
    console.log(
      `The choice you made is not valid we chose ${DEFAULT_SELECTION} for you`
    );
    return DEFAULT_SELECTION;
  }
  return playerChoice;
};

const getComputerChoice = () => {
  const selection = Math.random();
  let ComputerChoice;
  if (selection < 0.34) {
    ComputerChoice = ROCK;
  } else if (selection < 0.67) {
    ComputerChoice = PAPER;
  } else {
    ComputerChoice = SCISSOR;
  }
  return ComputerChoice;
};

const calculateWinner = (playerChoice, ComputerChoice) =>
  ComputerChoice === playerChoice
    ? DRAW
    : (ComputerChoice === ROCK && playerChoice === PAPER) ||
      (ComputerChoice === PAPER && playerChoice === SCISSOR) ||
      (ComputerChoice === SCISSOR && playerChoice === ROCK)
    ? WINNER
    : LOSER;

startGameBtn.addEventListener("click", () => {
  if (isGameOn) {
    return;
  }
  isGameOn = true;
  console.log("game is starting...");
  const playerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const result = calculateWinner(playerChoice, ComputerChoice);
  console.log(`player chose ${playerChoice}`);
  console.log(`computer chose ${ComputerChoice}`);
  let msg = `player chose ${playerChoice}, compyter chose ${ComputerChoice}. `;
  if (result === WINNER) {
    msg = msg + `You WON, CONGRATULATIONS`;
  } else if (result === LOSER) {
    msg = msg + `You LOST, Bad Luck`;
  } else {
    msg = msg + `it's a DRAW`;
  }
  console.log(msg);
  isGameOn = false;
});
