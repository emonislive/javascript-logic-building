enum ErrorMessage {
  NUMBER_TYPE = "All the three values have to be of number type",
}

interface TypeDefine {
  principalAmount: number;
  interestRatePerYear: number;
  timeDuration: number;
}

const userInput: TypeDefine = {
  principalAmount: 1039,
  interestRatePerYear: 5.2,
  timeDuration: 1,
};

function calculateInterest(principalAmount: number, interestRatePerYear: number, timeDuration: number): void {
  if (
    typeof principalAmount !== "number" ||
    typeof interestRatePerYear !== "number" ||
    typeof timeDuration !== "number"
  ) {
    throw new Error(ErrorMessage.NUMBER_TYPE);
  }

  let simpleInterest: number = (principalAmount * interestRatePerYear * timeDuration) / 100;
  simpleInterest = parseFloat(simpleInterest.toFixed(2));

  console.log(`Simple Interest: ${simpleInterest}$`);
}

calculateInterest(userInput.principalAmount, userInput.interestRatePerYear, userInput.timeDuration);
