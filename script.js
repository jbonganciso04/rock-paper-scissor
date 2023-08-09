console.log("Hello")

let gameOver = false;
let choices = ["rock", "paper", "scissor"];
let winningMessage = "";
let userScore = 0;
let computerScore = 0;
let winner;

function getComputerChoice() {
    let temp = Math.floor(Math.random() * 3);
    return choices[temp];
}

function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice == computerChoice) {
        winningMessage = "It's a tie!"
    } else if ((userChoice == "rock" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "scissor") || (userChoice == "scissor" && computerChoice == "rock")) {
        winningMessage = `You lose ${computerChoice} beats ${userChoice}`;
        computerScore += 1;
    } else if ((userChoice == "rock" && computerChoice == "scissor") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissor" && computerChoice == "paper")) {
        winningMessage = `You win ${userChoice} beats ${computerChoice}`;
        userScore += 1;
    }

    console.log(winningMessage);
}


function game() {
    let userChoice = prompt("Rock, Paper or Scissors?");
    playRound(userChoice, getComputerChoice());
    if(userScore == 5) {
        gameOver = true;
        winningMessage = "User wins!"
    } else if (computerScore == 5) {
        gameOver = true;
        winningMessage = "Computer wins!"
    }
}

while(!gameOver) {
    console.log("-----------------------------")
    game();
    console.log(`User score is ${userScore}`)
    console.log(`computer score is ${computerScore}`)
    console.log("-----------------------------")
}

if(gameOver) {
    console.log(winningMessage);
} 
