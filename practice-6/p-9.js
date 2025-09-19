// ! Write a function that calculates and prints the sum of digits of a given number

function sumOfDigits(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative");
  }
  
  let splitDigit = num.toString().split("");
  let size = splitDigit.length;
  let sum = 0;

  // ? Method 1
  for (let i = 0; i < size; i++) {
    let charToNum = parseInt(splitDigit[i]);
    sum += charToNum;
  }

  // ? Method 2
  splitDigit.forEach((num) => {
    let charToNum = parseInt(num);
    sum += charToNum;
  });
  
  console.log(`The sum of digits [${num}]: ${sum}`);
}

sumOfDigits(415);
