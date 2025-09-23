// ! Write a program that checks if a given string is in alphabetical order.

function orderCheck(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input Value is not a String!");
  }

  if (!str || str.length <= 1) {
    return true;
  }

  let prev = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] >= prev) {
      prev = str[i];
    } else {
      return false;
    }
  }
  return true;
}

const str = "adghimoz";
console.log(orderCheck(str));
