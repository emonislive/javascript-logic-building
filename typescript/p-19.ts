function countWords(str: string) {
  const splitStr: string[] = str.trim().split(" ");
  const removeSpacesBetween: string[] = splitStr.filter((element) => element !== "");
  console.log(`${str}: ${removeSpacesBetween.length}`);
}

const str: string = "       This       is     a         sentence      ";
countWords(str);
