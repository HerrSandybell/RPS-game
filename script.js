// Declare variables that track the game scores.
// They must be global since more than one function uses them.
let wins = 0;
let losses = 0;
let ties = 0;
let rounds = 0;

const resultText  = document.querySelector(".result-text");
const gameButtons = document.querySelector(".game-buttons");

const playerImageContainer   = document.getElementById("player-choice-image");
const computerImageContainer = document.getElementById("computer-choice-image");

// set up the game board
reportCounters();
resetGame();

// This function assign the variables to counter elements in HTML.
function reportCounters() {
  document.getElementById(`rounds`).innerText = rounds;
  document.getElementById(`wins`).innerText = wins;
  document.getElementById(`losses`).innerText = losses;
  document.getElementById(`ties`).innerText = ties;
};

// This function resets all variables and text.
function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  rounds = 0;
  
  resultText.innerText = `To start the game, click one of the buttons below.`

  reportCounters()
  clearImages()
  createGameButtons();
};

// This function compares the results of both player and computer choices
// and checks for wins or ties.
function playRound(playerSelection) {
  let result;
  let resultAnnouncement;

  ++rounds;

  // display player selection in game panel
  const playerChoiceImage = document.createElement('img');
  playerChoiceImage.src = ` ./images/${playerSelection}.png`;
  playerChoiceImage.alt = `${playerSelection.charAt(0).toUpperCase()} Symbol`;
  playerImageContainer.replaceChildren(playerChoiceImage);

  // Computer plays a round
  const computerSelection = computerPlay()

  if (playerSelection === computerSelection) {
    result = `tie`;
    resultAnnouncement = `It's a tie! try again!`;
    ++ties;
  } else if ((playerSelection === `rock`) && (computerSelection === `scissors`)) {
    result = `win`;
    resultAnnouncement = `Rock beats scissors! You win!`;
    ++wins;
  } else if ((playerSelection === `rock`) && (computerSelection === `paper`)) {
    result = `lose`;
    resultAnnouncement = `Paper eats rock! You lose!`;
    ++losses;
  } else if ((playerSelection === `paper`) && (computerSelection === `rock`)) {
    result = `win`;
    resultAnnouncement = `Paper eats rock! You win!`;
    ++wins;
  } else if ((playerSelection === `paper`) && (computerSelection === `scissors`)) {
    result = `lose`;
    resultAnnouncement = `Scissors cut paper! You lose!`;
    ++losses;
  } else if ((playerSelection === `scissors`) && (computerSelection === `rock`)) {
    result = `lose`;
    resultAnnouncement = `Rock beats scissors! You lose!`;
    ++losses;
  } else if ((playerSelection === `scissors`) && (computerSelection === `paper`)) {
    result = `win`;
    resultAnnouncement = `Scissors cut paper! You win`;
    ++wins;
  }

  resultText.innerText = resultAnnouncement + checkEnd();

  reportCounters();
  return result;
};

// This function chooses rock, paper, or scissor at random for the OPPONENT.
function computerPlay() {
  const selection = [`rock`, `paper`, `scissors`];
  const computerSelection = selection[Math.floor(Math.random() * 3)];

  // Display computer choice in the game panel
  const computerChoiceImage = document.createElement('img');
  computerChoiceImage.src = ` ./images/${computerSelection}.png`;
  computerChoiceImage.alt = `${computerSelection.charAt(0).toUpperCase()} Symbol`;
  document.getElementById("computer-choice-image").replaceChildren(computerChoiceImage);

  return computerSelection;
};

// this function checks if any player got 3 wins, 
// and then adds a congratulatory string and replaces the choices with a reset button.
function checkEnd() {
  let endAnnouncement;
  
  if (wins === 3) {
    endAnnouncement = `\n` + ` You beat the computer! Winner winner chicken dinner!`;
    createResetButton();
  } else if (losses === 3) {
    endAnnouncement = `\n` + ` The Computer wins! Get good!`;
    createResetButton();
  } else {
    endAnnouncement = ``;
  }
  
  return endAnnouncement;
};

// Create and append the gameplay buttons.
function createGameButtons() {
  // create game button elements
  const rockButton = document.createElement('img');
  rockButton.src = "./images/rock.png";
  rockButton.id = "rock-button";
  rockButton.classList = "rps-button";
  rockButton.alt = "Choose Rock Button";
  rockButton.addEventListener("click", () => playRound("rock"));

  const paperButton = document.createElement('img');
  paperButton.src = "./images/paper.png";
  paperButton.id = "paper-button";
  paperButton.classList = "rps-button";
  paperButton.alt = "Choose Paper Button";
  paperButton.addEventListener("click", () => playRound("paper"));

  const scissorsButton = document.createElement('img');
  scissorsButton.src = "./images/scissors.png";
  scissorsButton.id = "scissors-button";
  scissorsButton.classList = "rps-button";
  scissorsButton.alt = "Choose Scissors Button";
  scissorsButton.addEventListener("click", () => playRound("scissors"));

  // remove all contents (reset button) with the game buttons.
  gameButtons.replaceChildren(rockButton, paperButton, scissorsButton);
};

function createResetButton() {
  const resetButton = document.createElement('button');
  resetButton.classList = "button";
  resetButton.textContent = "RESET GAME!";
  resetButton.addEventListener("click", () => resetGame());

  gameButtons.replaceChildren(resetButton);
};

// Clear the player and cpu choice images on page load or reset
function clearImages() {
  const img = document.createElement('img');
  playerImageContainer.replaceChildren(img);
  computerImageContainer.replaceChildren(img);
};