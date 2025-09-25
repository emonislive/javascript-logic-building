// ! Write a program that takes input from the user
// ??? First install "npm install prompt-sync"

function randomDice(numDice, slideDice) {
  const dice = [
`---------
|         |
|    0    |
|         |
---------`,

`---------
| 0       |
|         |
|       0 |
---------`,

`---------
| 0       |
|    0    |
|       0 |
---------`,

`---------
| 0     0 |
|         |
| 0     0 |
---------`,

`---------
| 0     0 |
|    0    |
| 0     0 |
---------`,

`---------
| 0     0 |
| 0     0 |
| 0     0 |
---------`,
  ];

  let randomDice4 = -1;
  let randomDice6 = -1;

  while (numDice--) {
    if (slideDice == 4) {
      randomDice4 = dice[Math.floor(Math.random() * (dice.length - 2))];
      console.log(randomDice4);
    }
    if (slideDice == 6) {
      randomDice6 = dice[Math.floor(Math.random() * dice.length)];
      console.log(randomDice6);
    }
  }
}

const prompt = require("prompt-sync")();

const numDice = prompt("Number of Dice: ");
const slideDice = prompt("Number of sides in a Dice: ");

randomDice(numDice, slideDice);
