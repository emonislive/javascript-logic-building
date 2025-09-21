// ! Write a function that counts and returns the number of words in a sentence.

function countWords(str) {
  let splitStr = str.trim().split(" ");
  let removeSpacesBetween = splitStr.filter((element) => element !== "");
  console.log(`${str}: ${removeSpacesBetween.length}`);
}

const str = "       This       is     a         sentence      ";
countWords(str);
