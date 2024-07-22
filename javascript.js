let computerScore;
let playerScore;
function getComputerChoice() {
  let choice = Math.random() * 3;

  if (choice == 0) return "rock";
  if (choice == 1) return "scissors";
  else return "paper";
}

function getHumanChoice() {
  return prompt("Type rock, paper, or scissors").toLowerCase();
}

function playRound() {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (computerChoice === "rock") {
    if (playerChoice === "rock") {
      console.log("You both chose rock. It's a draw!");
    }
    if (playerChoice === "paper") {
      console.log("You chose paper; the computer chose rock. You win!");
      playerScore++;
    }
    if (playerChoice === "scissors") {
      console.log("You chose scissors; the computer chose rock. You lose!");
      computerScore++;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      console.log("You chose rock; the computer chose paper. You lose!");
      computerScore++;
    } else if (playerChoice === "paper") {
      console.log("You both chose paper. It's a draw!");
    } else if (playerChoice === "scissors") {
      console.log("You chose scissors; the computer chose paper. You win!");
      playerScore++;
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      console.log("You chose rock; the computer chose scissors. You win!");
      playerScore++;
    } else if (playerChoice === "paper") {
      console.log("You chose paper; the computer chose scissors. You lose!");
      computerScore++;
    } else if (playerChoice === "scissors") {
      console.log("You both chose scissors. It's a draw!");
    }
  }
}

function playGame() {
  computerScore = 0;
  playerScore = 0;

  while ((playerScore != 5) & (computerScore != 5)) {
    playRound();
  }
}
