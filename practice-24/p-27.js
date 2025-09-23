// ! Write a program that checks if a given string is in alphabetical order.

function anagram(a, b) {
  let sizeA = a.length;
  let sizeB = b.length;

  if (sizeA !== sizeB) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  let char1;
  let char2;

  for (let i = 0; i < sizeA; i++) {
    char1 = a[i];
    char2 = b[i];
    if (!obj1[char1]) {
      obj1[char1] = 0;
    }

    if (!obj2[char2]) {
      obj2[char2] = 0;
    }
    obj1[char1]++;
    obj2[char2]++;
  }

  for (let i = 0; i < sizeA; i++) {
    char1 = a[i];
    char2 = b[i];
    if (obj1[char1] !== obj2[char2]) {
      return false;
    }
  }
  return true;
}

const a = "act";
const b = "cta";

console.log("Anagram: ", anagram(a, b));
