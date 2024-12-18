let randomNumber;
const messageElement = document.getElementById("message");

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}

function handleGuess(event) {
  event.preventDefault();

  const guessInput = document.getElementById("guessInput");
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    showMessage("Please enter a valid number between 1 and 100.");
    return;
  }

  if (userGuess === randomNumber) {
    showMessage("Congratulations! You guessed the right number!");
  } else if (userGuess < randomNumber) {
    showMessage("Your guess is too low. Try again!");
  } else {
    showMessage("Your guess is too high. Try again!");
  }

  guessInput.value = "";
}

function showMessage(message) {
  messageElement.textContent = message;
}

function resetGame() {
  generateRandomNumber();
  showMessage("");
  document.getElementById("guessInput").value = "";
}

document.getElementById("guessForm").addEventListener("submit", handleGuess);
document.getElementById("resetButton").addEventListener("click", resetGame);

resetGame();
