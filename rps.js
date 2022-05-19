let choice = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let randNumber = randomNumber(3);
    computerSelection = choice[randNumber];
    console.log("Computer's choice is: " + computerSelection);
}

function playerPlay() {
    let playerChoice = window.prompt("Choose 1: Rock, 2: Paper, 3: Scissors");
    if (playerChoice == 1) {
        playerSelection = "rock";
    } else if (playerChoice == 2) {
        playerSelection = "paper";
    } else if (playerChoice == 3) {
        playerSelection = "scissors";
    } else {
        console.log("Error");
        playerPlay();
    }
    console.log("Player's choice is " + playerSelection)
}

computerPlay();
playerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer Wins!");
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a DRAW!");
    } else {
        console.log("Player Wins!");
    }
 }

playRound(playerSelection, computerSelection);

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log("Starting over!");
    computerPlay();
    playerPlay();
    playRound(playerSelection, computerSelection);
})
