
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let rounds = 0;
    let selection = [`rock`, `paper`, `scissors`];

    // This function prompts the user to pick Rock Paper or Scissors and checks if the result is right. If not, it prompts the user to input again.
    function userPlay() {
        let playerSelection = prompt(`Choose: rock, paper, or scissors`).toLowerCase();
        console.log(`Player chooses: ` + playerSelection);
        if (selection.includes(playerSelection)) {
            return playerSelection;
        } else {
            alert(`Invalid input. Please choose rock, paper, or scissors only.`);
            userPlay();
        }
    }

    // This function chooses rock, paper, or scissor at random.
    function computerPlay() {
        let computerSelection = selection[Math.floor(Math.random() * 3)]
        console.log(`Computer chooses: ` + computerSelection);
        return computerSelection;
    }

    // This function compares the results of both player and computer choices and checks for wins or ties.
    function playRound(player, computer) {
        let result;
        if (player === computer) {
            result = "tie";
            alert(`It's a tie! try again!`);
            return result;
        } else if ((player === 'rock') && (computer === 'scissors')) {
            result = `win`;
            alert(`Rock beats scissors! You win!`);
        } else if ((player === 'rock') && (computer === `paper`)) {
            result = `lose`;
            alert(`Paper eats rock! You lose!`);
        } else if ((player === 'paper') && (computer === `rock`)) {
            result = `win`;
            alert(`Paper eats rock! You win!`);
        } else if ((player === 'paper') && (computer === `scissors`)) {
            result = `lose`;
            alert(`Scissors cut paper! You lose!`);
        } else if ((player === 'scissors') && (computer === `rock`)) {
            result = `lose`;
            alert(`Rock beats scissors! You lose!`);
        } else if ((player === 'scissors') && (computer === `paper`)) {
            result = `win`;
            alert(`Scissors cut paper! You win`);
        }
        return result;
    }


    // This function increases the round counter, and then shows the tracked rounds, wins, losses, and ties.
    function trackResults() {
        ++rounds;
        console.log(`Round: ` + rounds);
        console.log(`Wins: ` + wins);
        console.log(`Losses: ` + losses);
        console.log(`Ties: ` + ties);
    }

    // This function plays the game until one side wins 3 times.
    function game() {

        for (i=0; i<3;) {
            switch (playRound(userPlay(), computerPlay())) {
                case "win":
                console.log(`Player win.`)
                wins += 1;
                if (wins>losses) {i=wins};
                trackResults()
                break;

                case "lose":
                console.log(`Computer wins.`)
                losses += 1;
                if (losses>wins) {i=losses};
                trackResults()
                break;

                case "tie":
                console.log(`It's a tie.`)
                ties += 1;
                trackResults()
                break;
                }
            }
    
        if (wins === 3) {
            alert(`Congratulations! You won! Refresh the page to try again.`)
        } else {
            alert(`The computer won! Tough luck! Refresh the page to try again.`)
        }

    }