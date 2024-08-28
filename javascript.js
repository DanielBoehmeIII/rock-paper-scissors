for (i = 0; i != -99; i++) {
    
}

let odds = null;
let computerChoice = null;
let humanChoice = null;
let upper = null;
let sentinelValue = null;
let promptEscape = null;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    odds = (Math.random() * 100) + 1;
    if (odds < 33) {
       computerChoice = "Rock"; 
    } else if (odds > 33 && odds < 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    odds = null;
}

function getHumanChoice() {
    for (i = 0; i != -1; i++) {
        humanChoice = prompt("Enter Rock, Paper, or Scissors: ");
        upper = humanChoice.charAt(0).toUpperCase;
        humanChoice.slice(0, 1);
        humanChoice = upper + humanChoice;

        if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
            i = -1;
        } else {
            console.log("Invalid input, please enter another choice.\n");
        }
    }
}