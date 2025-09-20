// ! Write a function that tells if the given number is prime or not.

function checkPrime(num) {
  if (num <= 1) return false; // negative & 1 number is not a prime number
  if (num === 2) return true; // 2 is a prime number
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  if (checkPrime(7)) {
    console.log("Prime Number");
  } else {
    console.log("Not a Prime Number");
  }
}
main();
