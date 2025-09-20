// ! Write a function that calculates and prints the simple interest on a loan amount.

function calculateInterest(principalAmount, interestRatePerYear, timeDuration) {
  if (
    typeof principalAmount !== "number" ||
    typeof interestRatePerYear !== "number" ||
    typeof timeDuration !== "number"
  ) {
    throw new TypeError("All the Three values has to be Number Type");
  }

  let simpleInterest =
    (principalAmount * interestRatePerYear * timeDuration) / 100;
  console.log("Simple Interest:", simpleInterest);
}

calculateInterest(1000, 5, 1);
