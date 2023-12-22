// Get elements
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector(".reset");
const resultMessage = document.querySelector(".result-message");
const scoreBoard = document.querySelector("h3");
const allButtons = document.querySelectorAll("button");

// Set default values
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

// Get computer selection
function getComputerSelection() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Play a round of the game
function gameRound() {
  computerSelection = getComputerSelection();

  if (computerSelection == playerSelection) {
    resultMessage.textContent = `Tie! Both players chose ${computerSelection}`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    computerScore++;
    resultMessage.textContent = `Computer wins! Computer's ${computerSelection} beat your ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    resultMessage.textContent = `You win! Your ${playerSelection} beat computer's ${computerSelection}`;
  }
  scoreBoard.textContent = `Computer: ${computerScore} You: ${playerScore}`;
}

// End the game
function endGame() {
  for (let button of allButtons) {
    button.classList.toggle("hidden");
  }

  if (computerScore === 5) {
    resultMessage.textContent = `Game Over! Computer Wins with ${computerSelection}!`;
  } else if (playerScore === 5) {
    resultMessage.textContent = `Game Over! You Win with ${playerSelection}!`;
  }
}

//Reset the scores and display
function resetScores() {
  playerScore = 0;
  computerScore = 0;
  scoreBoard.textContent = `Score: 0`;
}

// Check for a winner (first to 5 points)
function checkForWinner() {
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

//Player selection events
function playerChoice(button, choice) {
  button.addEventListener("click", () => {
    playerSelection = choice;
    gameRound();
    checkForWinner();
  });
}

playerChoice(rockButton, "Rock");
playerChoice(paperButton, "Paper");
playerChoice(scissorsButton, "Scissors");

// Reset Game event
resetButton.addEventListener("click", () => {
  resetScores();
  endGame();
  resultMessage.textContent = `First to 5 points wins!`;
});
