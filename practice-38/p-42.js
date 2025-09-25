// ! Write a program that plays Rock Paper Scissors with the user
// ??? First install "npm install prompt-sync"

const prompt = require("prompt-sync")();

function rockPaperGame() {
  const computer = Math.floor(Math.random() * 3 + 1);

  console.log("\n\nPlease insert between 1 to 3 number\n");

  console.log("1. Rock");
  console.log("2. Paper");
  console.log("3. Scissors");

  let user = prompt("\nYour Turn: ");
  user = parseInt(user, 10);

  if (isNaN(user) || user < 1 || user > 3) {
    console.log("\nInvalid choice! Please enter 1, 2, or 3.");
    return;
  }

  const arr = ["Rock", "Paper", "Scissors"];

  console.log(`\nYou : ${arr[user - 1]}`);
  console.log(`Computer : ${arr[computer - 1]}\n`);

  if (user === computer) {
    console.log("It's a Tie!");
  } else if (
    (user === 1 && computer === 3) || // * Rock beats Scissors
    (user === 2 && computer === 1) || // * Paper beats Rock
    (user === 3 && computer === 2) // * Scissors beats Paper
  ) {
    console.log("You Won!");
  } else {
    console.log("Computer Won!");
  }
}

rockPaperGame();
