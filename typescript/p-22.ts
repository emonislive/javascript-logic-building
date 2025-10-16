enum ErrorMessage {
    NUMBER_TYPE = "The Value has to be a Number Type"
}

interface TypeDefine {
    num: number;
    numToStr: string[];
    sum: number;
    totalDigits: number;
    digit: number;
}

function checkArmstrong(userIn: number): void {
  if (typeof userIn !== "number") {
    throw new Error(ErrorMessage.NUMBER_TYPE);
  }

  const data: TypeDefine = {
    num: userIn,
    numToStr: [],
    sum: 0,
    totalDigits: 0,
    digit: 0,
  }

  data.numToStr = data.num.toString().split("");
  data.totalDigits = data.numToStr.length;

  data.numToStr.forEach((element) => {
    data.digit = parseInt(element);
    data.sum += Math.pow(data.digit, data.totalDigits);
  });

  if (data.num === data.sum) {
    console.log(`${data.num} is an Armstrong`);
  } else {
    console.log(`${data.num} is not an Armstrong`);
  }
}

checkArmstrong(153);    
