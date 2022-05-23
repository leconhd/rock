let choice = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;


let rockPlayer = document.querySelector('#rock');
let paperPlayer = document.querySelector('#paper');
let scissorsPlayer = document.querySelector('#scissors');

let computerDisplay = document.querySelector('#computer .score');
let playerDisplay = document.querySelector('#player .score');

let winnerDisplay = document.querySelector('#winner');

rockPlayer.addEventListener('click', () => {
    playerSelection = "rock";
    rockPlayer.classList.add("bigger");
    paperPlayer.classList.remove("bigger");
    scissorsPlayer.classList.remove("bigger");
    playRound(playerSelection);
});

paperPlayer.addEventListener('click', () => {
    playerSelection = "paper";
    rockPlayer.classList.remove("bigger");
    paperPlayer.classList.add("bigger");
    scissorsPlayer.classList.remove("bigger");
    playRound(playerSelection);
});

scissorsPlayer.addEventListener('click', () => {
    playerSelection = "scissors";
    rockPlayer.classList.remove("bigger");
    paperPlayer.classList.remove("bigger");
    scissorsPlayer.classList.add("bigger");
    playRound(playerSelection);
});

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection) {

    let randNumber = randomNumber(3);
    computerSelection = choice[randNumber];
    let choiceUI = document.querySelector('#computerschoice');

    if (computerSelection == "rock") {
        choiceUI.innerHTML="<img src=\"img/rock.svg\" height=\"80\" width=\"80\">";
    } else if (computerSelection == "paper") {
        choiceUI.innerHTML="<img src=\"img/paper.svg\" height=\"80\" width=\"80\">";
    } else {
        choiceUI.innerHTML="<img src=\"img/scissors.svg\" height=\"80\" width=\"80\">";
    }


    console.log("Computer's choice is: " + computerSelection);
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer Wins!");
        computerScore = computerScore + 1;
        computerDisplay.innerHTML = computerScore;
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a DRAW!");
    } else {
        console.log("Player Wins!");
        playerScore = playerScore + 1;
        playerDisplay.innerHTML = playerScore;
    }

    if (computerScore == 5) {
        winnerDisplay.innerHTML = "<h4>COMPUTER wins</h4>";
        startOver();
    } else if (playerScore == 5) {
        winnerDisplay.innerHTML = "<h4>PLAYER wins</h4>";
        startOver();
    }


};

let btn = document.querySelector('#btn');
btn.addEventListener('click', startOver);

function startOver() {
    console.log("Starting over!");
    computerScore = 0;
    playerScore = 0;

    computerDisplay.innerHTML = computerScore;
    playerDisplay.innerHTML = playerScore;
}
