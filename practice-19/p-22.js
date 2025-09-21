// ! Write a program that checks if a number is Armstrong or not

function checkArmstrong(num) {
  if (typeof num !== "number") {
    throw new TypeError("Value has to be Number Type");
  }

  let numToStr = num.toString().split("");
  let sum = 0;
  let totalDigits = numToStr.length;

  numToStr.forEach((element) => {
    let digit = parseInt(element);
    sum += Math.pow(digit, totalDigits);
  });

  if (num === sum) {
    console.log(`${num} is an Armstrong`);
  } else {
    console.log(`${num} is not an Armstrong`);
  }
}

checkArmstrong(153);
