// ! Write a function that checks if a string is palindrome or not

function maxVal(str) {
  if (typeof str !== "string") {
    throw new TypeError("Value cannot be other than STRING!!!");
  }

  lowerStr = str.toLowerCase();

  let revStr = lowerStr.split("").reverse().join("");

  if (revStr === lowerStr) {
    console.log(str, "is", "Palindrome");
  } else {
    console.log(str, "is not", "Palindrome");
  }
}

maxVal("eaaE");
