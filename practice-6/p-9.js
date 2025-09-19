// ! Write a function that calculates and prints the sum of digits of a given number

function sumOfDigits(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative");
  }
  
  let splitDigit = num.toString().split("");
  let size = splitDigit.length;
  let sum = 0;

  for (let i = 0; i < size; i++) {
    let charToNum = parseInt(splitDigit[i]);
    sum += charToNum;
  }
  console.log(`The sum of digits [${num}]: ${sum}`);
}

sumOfDigits(415);
