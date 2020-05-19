
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let rounds = 0;

    let result;
    let resultAnnouncement;
        
    const selection = [`rock`, `paper`, `scissors`];

   
    // This function assign the variables to counter elements in HTML.
    function reportCounters() {
    document.getElementById("rounds").innerHTML = rounds;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("ties").innerHTML = ties;
    }

    reportCounters()

    // This function prompts the user to pick Rock Paper or Scissors
    // and checks if the result is right.
    // If not, it prompts the user to input again.
    function userPlay() {
        console.log(`Player chooses: ` + playerSelection)
    }

    // This function chooses rock, paper, or scissor at random.
    function computerPlay() {
        let computerSelection = selection[Math.floor(Math.random() * 3)]
        console.log(`Computer chooses: ` + computerSelection);
        return computerSelection;
    }

    // This function compares the results of both player and computer choices
    // and checks for wins or ties.
    function playRound(player, computer) {
        console.log(`Player chooses: ` + player)
        if (player === computer) {

                result = "tie";
                resultAnnouncement = `It's a tie! try again!`;
                ++ties;

            } else if ((player === 'rock') && (computer === 'scissors')) {

                result = `win`;
                resultAnnouncement = `Rock beats scissors! You win!`;
                ++wins;

            } else if ((player === 'rock') && (computer === `paper`)) {

                result = `lose`;
                resultAnnouncement = `Paper eats rock! You lose!`;
                ++losses;

            } else if ((player === 'paper') && (computer === `rock`)) {

                result = `win`;
                resultAnnouncement = `Paper eats rock! You win!`;
                ++wins;

            } else if ((player === 'paper') && (computer === `scissors`)) {

                result = `lose`;
                resultAnnouncement = `Scissors cut paper! You lose!`;
                ++losses;

            } else if ((player === 'scissors') && (computer === `rock`)) {

                result = `lose`;
                resultAnnouncement = `Rock beats scissors! You lose!`;
                ++losses;

            } else if ((player === 'scissors') && (computer === `paper`)) {

                result = `win`;
                resultAnnouncement = `Scissors cut paper! You win`;
                ++wins;
        }

        // this section needs to be fixed.
        ++rounds;
        reportCounters()
        console.log(result);
        document.getElementById("result-text").innerHTML = resultAnnouncement;
        advanceCounters(result);
        return result;
    }

    // This function advances counters and reports them in HTML.
    //// is it still needed?

    // This function increases the round counter, and then shows the tracked rounds,
    // wins, losses, and ties.
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
                trackResults();
                break;

                case "lose":
                console.log(`Computer wins.`)
                losses += 1;
                if (losses>wins) {i=losses};
                trackResults();
                break;

                case "tie":
                console.log(`It's a tie.`)
                ties += 1;
                trackResults();
                break;
                }
            }
    
        if (wins === 3) {
            alert(`Congratulations! You won! Refresh the page to try again.`)
        } else {
            alert(`The computer won! Tough luck! Refresh the page to try again.`)
        }

    }

