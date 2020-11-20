let rounPlayed = 1;
let playerScore = 0;
let computerScore = 0;
let totalRounds = prompt("How many rounds you want to play?");

function computerPlay() {
    let words = ['rock', 'paper', 'scissors'];
    let position = Math.floor(Math.random() * words.length);
    return words[position];
}


function playRound(playerSelection) {
    let playerPoint = 0;
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log(`It's a draw! You both have chosen ${computerSelection}`);
        playerPoint = 2;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerPoint = 1;
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    return playerPoint;
}


function game(playerSelection) {
    let result = playRound(playerSelection);
    if (rounPlayed >= totalRounds) {
        if (playerScore > computerScore) {
            rounPlayed = 0;
            playerScore = 0;
            computerScore = 0;
            alert("You won the game!");
            totalRounds = prompt("How many rounds you want to play?");
        } else if (playerScore < computerScore) {
            rounPlayed = 0;
            playerScore = 0;
            computerScore = 0;
            alert("You lost the game!");
            totalRounds = prompt("How many rounds you want to play?");
        } else {
            rounPlayed = 0;
            playerScore = 0;
            computerScore = 0;
            alert("It's a draw!");
            totalRounds = prompt("How many rounds you want to play?");
        }
    }
    if (result == 0) {
        computerScore++;
    } else if (result == 1){
        playerScore++;
    }
    rounPlayed++;
}




