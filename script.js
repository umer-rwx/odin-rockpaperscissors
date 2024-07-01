"use strict";

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Computer chose " + computerChoice);

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Tie");
            } else if (computerChoice === "paper") {
                console.log("Computer gets a point.");
                computerScore++;
            } else {
                console.log("Human gets a point.")
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("Human gets a point.")
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("Tie");
            } else {
                console.log("Computer gets a point.");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("Computer gets a point.");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("Human gets a point.")
                humanScore++;
            } else {
                console.log("Tie");
            }
            break;
        default:
            console.log("Sorry, I don't understand");
    }
}

function playGame() {
    for (let step = 1; step <= 5; step++) {
        playRound();
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else {
        console.log("Human wins!");
    }
}

playGame();