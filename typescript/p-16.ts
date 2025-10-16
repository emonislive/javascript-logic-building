enum ErrorMessage {
    NOT_NUMBER_OR_NOT_ARRAY = "Value Has to be Number Type && Parameter passing has to be Array"
}

function calculateAverage(num: number[]) {
  if (!Array.isArray(num)) {
    throw new Error(ErrorMessage.NOT_NUMBER_OR_NOT_ARRAY);
  }

  let sum: number = 0;
  const size: number = num.length;

  for (let i = 0; i < size; i++) {
    sum += num[i];
  }
  let average: number = parseFloat((sum / size).toFixed(3));
  console.log(average);
}

const num = [1, 2, 4];
calculateAverage(num);
