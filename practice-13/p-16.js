// ! Write a function that calculates and returns the average of a set of numbers.

function calculateAverage(num) {
  if (typeof num !== "number" || !Array.isArray(num)) {
    throw new TypeError(
      "Value Has to be Number Type && Parameter passing has to be Array"
    );
  }

  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  let average = sum / num.length;
  console.log(average);
}

const num = [1, 2, 4];
calculateAverage(num);
