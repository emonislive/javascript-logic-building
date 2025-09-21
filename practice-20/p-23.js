// ! Write a program that prints numbers from 1 to N replacing
// * - multiple of 3 with "Fizz"
// * - multiple of 5 with "Buzz"
// * - multiple of both 3 & 5 with "FizzBuzz"

function main(n) {
  if (typeof n !== "number") {
    throw new TypeError("Input is not Number Type");
  }

  if (n <= 0) {
    throw new RangeError("Input cannot be a negative or zero number");
  }

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

main(36);
