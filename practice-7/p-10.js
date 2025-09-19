// ! Write a function that generates and prints a multiplication table for a given number up to a specific range

function sumOfDigits(num, range) {
  if (typeof num !== "number") {
    throw new TypeError("The given value has to be number/integer");
  }
  
  if (range < 1) {
    throw new RangeError("Range cannot be less then 1");
  }
  
  for (let i = 1; i <= range; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

sumOfDigits(3, 10);
