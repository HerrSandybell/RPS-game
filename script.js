
let wins = 0;
let losses = 0;
let ties = 0;
let rounds = 0;

let result;
let resultAnnouncement;

const gameButtons = document.getElementById("game-buttons");
const resultText = document.getElementById("result-text");
const playerChoiceImage = document.getElementById("player-choice-image");
const computerChoiceImage = document.getElementById("computer-choice-image");    
const selection = [`rock`, `paper`, `scissors`];

reportCounters()
resetGame()

// This function assign the variables to counter elements in HTML.
function reportCounters() {
document.getElementById(`rounds`).innerHTML = rounds;
document.getElementById(`wins`).innerHTML = wins;
document.getElementById(`losses`).innerHTML = losses;
document.getElementById(`ties`).innerHTML = ties;
console.log(`Round: ` + rounds);
console.log(`Wins: ` + wins);
console.log(`Losses: ` + losses);
console.log(`Ties: ` + ties);
}

// This function chooses rock, paper, or scissor at random.
function computerPlay() {
    let computerSelection = selection[Math.floor(Math.random() * 3)]
    console.log(`Computer chooses: ` + computerSelection);
    return computerSelection;
}

// This function compares the results of both player and computer choices
// and checks for wins or ties.
function playRound(playerSelection) {
    
    let computerSelection = computerPlay()

    ++rounds;

    playerChoiceImage.innerHTML = `<p class="choice">Your choice!</p>
    <div id="player-choice-image"><img src="./images/${playerSelection}.png" alt="${playerSelection.charAt(0).toUpperCase()} Symbol"></img>`;
    computerChoiceImage.innerHTML = `<p class="choice">Computer's choice!</p><img src="./images/${computerSelection}.png" alt="${computerSelection} Symbol"></img>`;

    console.log(`Player chooses: ` + playerSelection);

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

    resultText.innerHTML = resultAnnouncement + checkEnd()

    console.log(result);
    reportCounters()
    return result;
}

// this function checks if any player got 3 wins, 
// and then adds a congratulatory string and replaces the choices with a reset button.
function checkEnd() {
    let endAnnouncement;
    
    if (wins === 3) {
        endAnnouncement = `\n` + ` You beat the computer! Winner winner chicken dinner!`;
        gameButtons.innerHTML = `<button onclick="resetGame()">reset</button>`
    } else if (losses === 3) {
        endAnnouncement = `\n` + ` The Computer wins! Get good!`;
        gameButtons.innerHTML = `<button onclick="resetGame()">reset</button>`
    } else {
        endAnnouncement = ``;
    }
    
    return endAnnouncement;
}

// This function resets all variables and text.
function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    rounds = 0;
    reportCounters()
    resultText.innerHTML = `To start the game, click one of the buttons below.`
    playerChoiceImage.innerHTML = `<img src="" alt=""></img>`
    computerChoiceImage.innerHTML = `<img src="" alt=""></img>`
    gameButtons.innerHTML =
    
    `
    <div class="button-container">
        <input id="rock-button" class="RPS-button" type="image" src="./images/rock.png" onclick="playRound('rock')">
    </div>
    
    <div class="button-container">
        <input id="paper-button" class="RPS-button" type="image" src="./images/paper.png" onclick="playRound('paper')">
    </div>
    
    <div class="button-container">
        <input id="scissor-button" class="RPS-button" type="image" src="./images/scissors.png" onclick="playRound('scissors')">
    </div>
    `;
}