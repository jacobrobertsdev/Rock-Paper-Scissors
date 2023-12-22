let computerScore = 0;
let playerScore = 0;

// Generate computer selection

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


// Play a round of the game

function gameRound() {

  let playerSelection = prompt(
    "Please enter: Rock, Paper, or Scissors!"
  ).toLowerCase();
  let computerSelection = getComputerChoice();
  if (computerSelection == playerSelection) {
    alert(`Tie! Your Score:${playerScore}, Computer Score:${computerScore}`);
  } else if (
    (computerSelection === "rock" && playerSelection == "scissors") ||
    (computerSelection === "paper" && playerSelection == "rock") ||
    (computerSelection === "scissors" && playerSelection == "paper")
  ) {
    computerScore++;
    alert(
      `You lose! ${computerSelection} beats ${playerSelection}. Your Score:${playerScore}, Computer Score:${computerScore}`
    );
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    alert(
      `You win! ${playerSelection} beats ${computerSelection}. Your Score:${playerScore}, Computer Score:${computerScore}`
    );
  }
}


// Play a full game (first one to score 5 points)

function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    gameRound();
    if (playerScore === 5) {
      alert(`You won the game! Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore === 5) {
      alert(`You lost the game! Score: ${playerScore} to ${computerScore}`);
    }
  }
}

playGame();
