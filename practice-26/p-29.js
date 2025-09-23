// ! Write a program that checks if a given number is a perfect number.

function perfectNumber(number) {
  if (typeof number !== "number") {
    throw new TypeError("The input data is not a number type");
  }

  if (number < 0) {
    throw new RangeError("The input value cannot be a negative number");
  }

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  console.log("The Sum is:", sum);
  return sum === number;
}

const number = 28;
console.log(number, "is a perfect number:", perfectNumber(number));
