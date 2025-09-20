// ! Write a function that counts and prints the number of vowels and consonants in a given string

function countVowelConsonant(str) {
  if (typeof str !== "string") {
    throw new TypeError("The datatype is not a string");
  }

  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  str = str.toLowerCase();

  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else if (consonants.includes(str[i])) {
      consonantCount++;
    }
  }

  return { vowelCount, consonantCount };
}

const str = "ABcdefghijk 1213 34 a";
console.log(countVowelConsonant(str));
