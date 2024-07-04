const btns = document.querySelectorAll("button");
const move = document.getElementById("move");
const humanScoreDOM = document.getElementById("playerScore")
const computerScoreDOM = document.getElementById("computerScore")

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.textContent.toLowerCase(), getComputerChoice());
    computerScoreDOM.textContent = computerScore;
    humanScoreDOM.textContent = humanScore;
  })
})

let humanScore = 0;
let computerScore = 0;

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

function showResults() {
  if (humanScore > computerScore) {
    move.textContent = "You Win!";
    return "";
  }
  if (humanScore < computerScore) {
    move.textContent = "You Lose!";
    return "";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      move.textContent = "Draw! Both played Rock";
    }
    if (computerChoice == "paper") {
      move.textContent = "You Lose! Paper beats Rock";
      computerScore++;
    }
    if (computerChoice == "scissors") {
      move.textContent = "You Win! Rock beats Scissors";
      humanScore++;
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      move.textContent = "You Win! Paper beats Rock!";
      humanScore++;
    }
    if (computerChoice == "paper") {
      move.textContent = "Draw! Both played Paper";
    }
    if (computerChoice == "scissors") {
      move.textContent = "You Lose! Scissors beats Paper";
      computerScore++;
    }
  }

  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      move.textContent = "You Lose! Rock beats Scissors";
      computerScore++;
    }
    if (computerChoice == "paper") {
      move.textContent = "You Win! Scissors beats Paper";
      humanScore++;
    }
    if (computerChoice == "scissors") {
      move.textContent = "Draw! Both played Scissors";
    }
  }

  if (humanScore == 5 || computerScore == 5) {
    showResults();
  }
  return;
}