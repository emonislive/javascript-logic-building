// ! Write a function that calculate factorial of a given number

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
}

factorial(5);
