/*
function playGame() {
    while (sentinelValue != -99) {
        
        sentinelValue++;
         if (sentinalValue % 5 == 0) { 
            let response = prompt("Keep Playing? (Y/n):");
            response = response.toLowerCase();

            if (response == "n" || response == "no") {
                sentinelValue= -99;
            }
        }
    
    }
}
*/

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

/*
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
*/

const div = document.createElement("div");

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Paper" || 
        humanChoice == "Paper" && computerChoice == "Scissors" || 
        humanChoice == "Scissors" && computerChoice == "Rock") {
        div.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    } else if (humanChoice == computerChoice) {
        div.textContent = `A tie! Both chose ${computerChoice}!`;
    } else {
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    humanResults.textContent = `Human Score: ${humanScore}`;
    computerResults.textContent = `Computer Score: ${computerScore}`;
}

const choicesDiv = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
choicesDiv.textContent = "Choices: "
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
choicesDiv.appendChild(rockBtn);
choicesDiv.appendChild(paperBtn);
choicesDiv.appendChild(scissorsBtn);
document.body.appendChild(choicesDiv);

rockBtn.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

const results = document.createElement("div");
const humanResults = document.createElement("p");
const computerResults = document.createElement("p");
results.appendChild(humanResults);
results.appendChild(computerResults);

document.body.appendChild(div);
document.body.appendChild(results);
