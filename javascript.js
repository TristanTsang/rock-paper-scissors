let computerScore = 0;
let playerScore = 0;
let round = 0;
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  if (choice === 1) return "scissors";
  if (choice === 2) return "paper";
}

function getHumanChoice() {
  return prompt("Type rock, paper, or scissors").toLowerCase();
}

function playRound(humanChoice) {
  computerChoice = getComputerChoice();
  console.log(humanChoice + " " + computerChoice);
  let result = decideWinner(humanChoice, computerChoice);

  if (result === 1) playerScore++;
  else if (result === 2) computerScore++;

  resultDiv.innerHTML =
    "Player choice: " + humanChoice + " | Computer choice: " + computerChoice;
  scoreDiv.innerHTML =
    "Player Score: " + playerScore + " | Computer Score: " + computerScore;
  round++;

  if (round === 5) {
    if (playerScore > computerScore) endDiv.innerHTML = "Player Wins!";
    else if (playerScore < computerScore) endDiv.innerHTML = "Computer Wins!";
    else endDiv.innerHTML = "It's a draw!";
  }
}

//Returns 0 if tied; 1 if humanChoice wins; 2 if computerChoice wins
function decideWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return 0;

  if ((humanChoice === "rock") & (computerChoice === "scissors")) return 1;
  if ((humanChoice === "rock") & (computerChoice === "paper")) return 2;

  if ((humanChoice === "paper") & (computerChoice === "rock")) return 1;
  if ((humanChoice === "paper") & (computerChoice === "scissors")) return 2;

  if ((humanChoice === "scissors") & (computerChoice === "paper")) return 1;
  if ((humanChoice === "scissors") & (computerChoice === "rock")) return 2;
}

function playGame() {
  computerScore = 0;
  humanScore = 0;

  for (var i = 0; i < 5; i++) playRound();
}

buttons = document.querySelectorAll(".rps-option");
scoreDiv = document.querySelector(".score");
resultDiv = document.querySelector(".result");
endDiv = document.querySelector(".end");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (round < 5) playRound(button.id);
  });
});
