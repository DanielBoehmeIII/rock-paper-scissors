function playGame() {
    while (sentinelValue != -99) {
        playRound(getHumanChoice(), getComputerChoice());
        sentinelValue++;
        if (sentinelValue % 5 == 0) {
            let response = prompt("Keep Playing? (Y/n):");
            response = response.toLowerCase();

            if (response == "n" || response == "no") {
                sentinelValue= -99;
            }
        }
    }
}

let humanChoice = null;
let odds = null;
let computerChoice = null;
let upper = null;
let promptEscape = null;
let humanScore = 0;
let computerScore = 0;
let sentinelValue = 0;

function getComputerChoice() {
    odds = (Math.random() * 100) + 1;
    if (odds <= 33) {
       computerChoice = "Rock"; 
    } else if (odds > 33 && odds <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    odds = null;
    return computerChoice;
}

function getHumanChoice() {
    while (true) {
        humanChoice = prompt("Enter Rock, Paper, or Scissors: ");
        humanChoice = humanChoice.toLowerCase();
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

        if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
            return humanChoice;
        } else {
            console.log("Invalid input, please enter another choice.\n");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Paper" || 
        humanChoice == "Paper" && computerChoice == "Scissors" || 
        humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if (humanChoice == computerChoice) {
        console.log(`A tie! Both chose ${computerChoice}!`);
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
}

playGame();
