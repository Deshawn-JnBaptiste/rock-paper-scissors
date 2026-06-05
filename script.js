function getComputerChoice() {
    let computerChoice;

    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        computerChoice = "Rock"
    }
    else if (randomNum == 2) {
        computerChoice = "Paper"
    }

    else if (randomNum == 3) {
        computerChoice = "Scissors"
    }

   return console.log(computerChoice)

   
   
}

getComputerChoice()

