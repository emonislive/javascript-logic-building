enum ErrorMessages {
  NEGATIVE_NUMBER = "Number can't be less than 0",
}

function factorsFinder(num: number): void {
  if (num < 0) {
    throw new Error(ErrorMessages.NEGATIVE_NUMBER);
  }

  let factors: number[] = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(`Factors of ${num}: ${factors}`);
}

factorsFinder(100);
