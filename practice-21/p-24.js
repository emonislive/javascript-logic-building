// ! Write a program that prints a number pyramid

function patternPrint(patternSize) {
  let digitPerRow = 1;
  let spaceAtFirst = patternSize;

  for (let i = 0; i < patternSize; i++) {
    spaceAtFirst--;
    for (let j = 0; j <= spaceAtFirst; j++) {
      process.stdout.write(" ");
    }

    const mid = digitPerRow / 2; // * To find where to reverse the digits
    let reverseDigitPrint = Math.floor(mid) + 2;

    for (let k = 1; k <= digitPerRow; k++) {
      if (k === mid || k > mid) {
        reverseDigitPrint--;
        process.stdout.write(`${reverseDigitPrint}`);
      } else {
        process.stdout.write(`${k}`);
      }
    }
    digitPerRow += 2;
    console.log();
  }
}

patternPrint(4);

/*
ex:

   1
  121
 12321
1234321

*/
