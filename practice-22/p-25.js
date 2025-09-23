// ! Write a program that counts the occurrences of each character in a given string

// ? Method 1
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


// ? Method 2
function frequencyCount(message) {
  message = message.toLowerCase();
  const frequencyObject = {};

  for (let i = 0; i < message.length; i++) {
    if (message[i] >= "a" && message[i] <= "z") {
      if (!frequencyObject[message[i]]) {
        frequencyObject[message[i]] = 0;
      }
      frequencyObject[message[i]]++;
    }
  }
  console.log(frequencyObject);
}

const message = "Life is full of sadness";
frequencyCount(message);



// ? Method 3
function frequencyCount(message) {
  message = message.toLowerCase();
  const splittedString = message.split("");
  const result = splittedString.reduce(operation, {});

  console.log(result);
}

function operation(object, char) {
  if (char !== " ") {
    if (!object[char]) {
      object[char] = 0;
    }
    object[char]++;
  }
  return object;
}
const message = "Life is full of sadness";
frequencyCount(message);
