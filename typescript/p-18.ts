function checkPrime(num: number) {
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

function main(num: number) {
  if (checkPrime(num)) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is not a Prime Number`);
  }
}
main(10);
