// ! Write a program to find and count all palindromic substrings within a given string.

let arr = [];

function display() {
  console.log(`Palindromic sub-string count: ${arr.length} -> ${arr}`);
}

function add(subStr) {
  arr.push(subStr);
}

function isPalindrome(subStr) {
  const reverseString = subStr.split("").reverse().join("");
  return subStr === reverseString;
}

function palindromic(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subString = str.slice(i, j);
      if (isPalindrome(subString) && subString.length > 1) {
        add(subString);
      }
    }
  }
  display();
}

const str = "abcradarvdt";
palindromic(str);
