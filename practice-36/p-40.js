// ! Write a program that builds a number guess game.
// ??? First install "npm install prompt-sync"

function guessingGame() {
  console.log("Player 2 guessed a number between(1-100)...It's your turn now");

  const randomNumber = Math.floor(Math.random() * 100 + 1);
  const prompt = require("prompt-sync")();

  let attempt = 5;

  while (attempt--) {
    console.log(`You have ${attempt + 1} attempt left`);

    let userInput = prompt("Enter your guessed number: ");
    userInput = parseInt(userInput);

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      console.log("❌ Invalid input! Please enter a number between 1 and 100.");
      attempt++; // don't count this as an attempt
      continue;
    }

    let diff = randomNumber - userInput;

    if (diff === 0) {
      console.log(`🎉 You Won. It took you only ${5 - attempt} attempt`);
      return;
    } else if (diff >= 1 && diff <= 5) {
      console.log("Hint: Very Close");
    } else if (diff > 5) {
      console.log("Hint: Too Low");
    } else if (diff >= -5 && diff <= -1) {
      console.log("Hint: Very Close");
    } else if (diff < -5) {
      console.log("Hint: Too High");
    }
  }
  console.log("You Lost :(");
  console.log(`The Number was: ${randomNumber}`);
}

guessingGame();
