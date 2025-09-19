// ! Write a function that returns the reverse of a string

function reverseString(message) {
  let size = message.length;
  let reverseString = "";

  // ? Method 1
  for (let i = size - 1; i >= 0; i--) {
    reverseString += message[i];
  }

  // ? Method 2
  let reverseString2 = message.split("").reverse().join("");

  console.log(reverseString);
  console.log(reverseString2);
}

reverseString("12345");
