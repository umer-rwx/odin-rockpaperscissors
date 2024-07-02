"use strict";

let turnNumber = 0;
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener( "click" , () => playRound("rock", getComputerChoice() ) );
paperBtn.addEventListener( "click" , () => playRound("paper", getComputerChoice() ) );
scissorsBtn.addEventListener( "click" , () => playRound("scissors", getComputerChoice() ) );

function printInResult(str) {
    const resultDiv = document.getElementById("result");
    const output = document.createElement("p");

    output.textContent = "> " + str;
    resultDiv.prepend(output);
}

function getComputerChoice() {
    let ran = Math.floor( Math.random() * 3 );
    if (ran === 0) {
        return "rock";
    } else if (ran === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    //printInResult("Computer chose " + computerChoice);

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                printInResult("Tie");
            } else if (computerChoice === "paper") {
                printInResult("Computer gets a point.");
                computerScore++;
            } else {
                printInResult("Human gets a point.")
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                printInResult("Human gets a point.")
                humanScore++;
            } else if (computerChoice === "paper") {
                printInResult("Tie");
            } else {
                printInResult("Computer gets a point.");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                printInResult("Computer gets a point.");
                computerScore++;
            } else if (computerChoice === "paper") {
                printInResult("Human gets a point.")
                humanScore++;
            } else {
                printInResult("Tie");
            }
            break;
        default:
            printInResult("Sorry, I don't understand");
    }
}
