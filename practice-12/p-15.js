// ! Write a function that finds all the factors of a given number.

function factorsFinder(num) {
  if (num < 0) {
    throw new Error("Number can't be less then 0");
  }

  let factors = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(`Factors of ${num}: ${factors}`);
}

factorsFinder(0);
