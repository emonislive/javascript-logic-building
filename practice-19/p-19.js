// ! Write a function that counts and returns the number of words in a sentence.

function countWords(str) {
  let splitStr = str.trim().split(" "); // trim() removes spaces from start and end of the sentance.
  let removeSpacesBetween = splitStr.filter((element) => element !== "");
  console.log(`${str}: ${removeSpacesBetween.length}`);
}

countWords("       This       is       a         sentence     ");
