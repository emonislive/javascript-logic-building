// ! Write a function that finds and prints the maximum element in an array of numbers

function maxVal(arr) {
  // ? Method 1
  let maxNum = Math.max(...arr);
  console.log("Maximum Element: ", maxNum);

  // ? Method 2
  arr.sort((a, b) => b - a); // * Descending Order
  console.log("Maximum Element: ", arr[0]);
}

maxVal([9, 3, 5, 19, 2, 1, 7]);
