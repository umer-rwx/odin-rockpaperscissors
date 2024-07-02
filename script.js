let turnNumber = 0;
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const scoreCard = document.getElementById("score");

rockBtn.addEventListener( "click" , () => playRound("rock", getComputerChoice() ) );
paperBtn.addEventListener( "click" , () => playRound("paper", getComputerChoice() ) );
scissorsBtn.addEventListener( "click" , () => playRound("scissors", getComputerChoice() ) );


function printInResult(str) {
    const resultDiv = document.getElementById("result");
    const output = document.createElement("p");

    output.textContent = `[${turnNumber}] -> ` + str;
    resultDiv.prepend(output);
}

function setMaxResultsShown(number) {
    if (turnNumber > number) {
        const oldResult = document.getElementById("result").lastChild;
        oldResult.remove();
    }
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
    turnNumber++;
    computerChoice = getComputerChoice();

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Tie");
            } else if (computerChoice === "paper") {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Computer gets a point.");
                computerScore++;
            } else {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Human gets a point.")
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + " Human gets a point.")
                humanScore++;
            } else if (computerChoice === "paper") {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Tie");
            } else {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Computer gets a point.");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Computer gets a point.");
                computerScore++;
            } else if (computerChoice === "paper") {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Human gets a point.")
                humanScore++;
            } else {
                printInResult("Human chose " + humanChoice + ". Computer chose " + computerChoice + ". Tie");
            }
            break;
        default:
            printInResult("Sorry, I don't understand");
    }
    scoreCard.textContent = "Human Score: " + humanScore + "\n" + ". Computer Score: " + computerScore;
    setMaxResultsShown(20);
}
