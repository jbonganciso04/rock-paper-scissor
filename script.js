console.log("Hello")

let gameOver = false;
let choices = ["rock", "paper", "scissor"];
let winningMessage = "";
let userScore = 4;
let computerScore = 0;
let winner;


let rockBtn = document.getElementById("rock__btn");
let paperBtn = document.getElementById("paper__btn");
let scissorBtn = document.getElementById("scissor__btn");
let buttons = document.getElementsByTagName("button");

rockBtn.addEventListener("click", (e) => {
    game(rockBtn.value);
    logScore();
})

paperBtn.addEventListener("click", (e) => {
    game(paperBtn.value);
    logScore();
})

scissorBtn.addEventListener("click", (e) => {
    game(scissorBtn.value);
    logScore();
})

function getComputerChoice() {
    let temp = Math.floor(Math.random() * 3);
    return choices[temp];
}

function playRound(userChoice, computerChoice) {
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


function game(choice) {
    playRound(choice, getComputerChoice());
    if(userScore == 5) {
        gameOver = true;
        winningMessage = "User wins!"
    } else if (computerScore == 5) {
        gameOver = true;
        winningMessage = "Computer wins!"
    }
    if(gameOver) {
        console.log(winningMessage);
        disableButtons(buttons);
    } 
}

function logScore() {
    console.log("-----------------------------")
    console.log(`User score is ${userScore}`)
    console.log(`computer score is ${computerScore}`)
    console.log("-----------------------------")
}

function disableButtons(buttons) {
    Array.from(buttons).map(btn => btn.disabled = true);
}