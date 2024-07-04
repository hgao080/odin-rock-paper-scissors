console.log(playGame());

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch(computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let playerChoice = prompt("Would you like to play ROCK, PAPER or SCISSORS?");

  switch (playerChoice.toLowerCase()) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      return "invalid input";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log("You Win!")
    return;
  }
  if (humanScore < computerScore) {
    console.log("You Lose!")
    return;
  }
  console.log("Draw!")

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        console.log("Draw! Both played Rock")
      }
      if (computerChoice == "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore++;
      }
      if (computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors")
        humanScore++;
      }
      return;
    }
  
    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You Win! Paper beats Rock!")
        humanScore++;
      }
      if (computerChoice == "paper") {
        console.log("Draw! Both played Paper")
      }
      if (computerChoice == "scissors") {
        console.log("You Lose! Scissors beats Paper")
        computerScore++;
      }
      return;
    }
  
    if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore++;
      }
      if (computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper")
        humanScore++;
      }
      if (computerChoice == "scissors") {
        console.log("Draw! Both played Scissors")
      }
      return;
    }
  }
}