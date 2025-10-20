enum ErroMessage  {
  TypeError = "Input is not Number Type",
  RangeError = "Input cannot be a negative or zero number",
}

function main(n: number) {
  if (typeof n !== "number") {
    throw new Error(ErroMessage.TypeError);
  }

  if (n <= 0) {
    throw new Error(ErroMessage.RangeError);
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
