// ! Write a program that counts the occurrences of each character in a given string

function frequencyCount(message) {
  message = message.toLowerCase();

  const size = message.length;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  let frequency = new Array(26).fill(0);

  Array.from(message).forEach((char) => {
    if (alphabets.includes(char)) {
      const index = alphabets.indexOf(char);
      frequency[index]++;
    }
  });

  // * Total Alphabets = 26
  for (let i = 0; i < 26; i++) {
    if (frequency[i] >= 1) {
      console.log(`${alphabets[i]}: ${frequency[i]}`);
    }
  }
}

const message = "Life is full of sadness";
frequencyCount(message);
