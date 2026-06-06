function getComputerChoice() {
    let computerChoice;

    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        computerChoice = "rock"
    }
    else if (randomNum == 2) {
        computerChoice = "paper"
    }

    else if (randomNum == 3) {
        computerChoice = "scissors"
    }

   return computerChoice;
}


function getHumanChoice() {
    let humanChoice = prompt("Type: Rock, Paper or Scissors")

   return humanChoice;

}

function playRound (humanChoice, computerChoice) {

}

let humanScore = 0;
let computerScore = 0;

getComputerChoice()
getHumanChoice()
