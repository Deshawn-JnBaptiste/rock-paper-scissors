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

   return humanChoice.toLowerCase();

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        //Player chooses Rock
        if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("You tie, You both chose rock.")
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lost, the computer chose paper")
        computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You won, the computer chose scissors")
        humanScore++;
        }

        //Player chooses Paper
        else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("You tie, You both chose paper.")
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lost, the computer chose scissors")
        computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You won, the computer chose rock")
        humanScore++;
        }

        //Player chooses Scissors
        else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("You tie, You both chose scissors.")
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lost, the computer chose rock")
        computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You won, the computer chose paper")
        humanScore++;
        }
    }
    //UI Code
    const rockButton = document.querySelector("#rockButton")
    const paperButton = document.querySelector("#paperButton")
    const scissorsButton = document.querySelector("#scissorsButton")
    

    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    })

    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    })

    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    })
    
 }

 playGame();



