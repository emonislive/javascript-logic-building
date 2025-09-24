// ! Write a program that finds all occurrences of a given word in a big string.

function findWordPosition(str) {
  const word = "big";
  const len = word.length; // * to work with any word in the full string
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let subString = str.slice(i, i + len);
    // console.log("Line:", i, subString); // ? for debugging
    if (subString === word) {
      arr.push(i);
    }
  }
  console.log(arr);
}

findWordPosition(
  "This is a big string with the word big repeated in the big string"
);
