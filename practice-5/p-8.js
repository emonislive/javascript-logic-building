// ! Write a function that tells if provided year is a leap year or not

function leapYear(year) {
  if ((year % 100 !== 0 || year % 400 === 0) && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function main() {
  const year = 2006;

  const result = leapYear(year);

  if (result) {
    console.log("Leap Year!");
  } else {
    console.log("Not a Leap Year");
  }
}

main();
