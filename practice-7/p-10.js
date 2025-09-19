// ! Write a function that generates and prints a multiplication table for a given number up to a specific range

function sumOfDigits(num, range) {
  for (let i = 1; i <= range; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

sumOfDigits(3, 10);
