// ! Write a program that multiplies two matrices and returns the result

function multiplyMatrix(a, b) {
  let arr = [];
  const rows = a.length;
  const cols = b[0].length;

  for (let i = 0; i < rows; i++) {
    arr[i] = []; // * initialize new row each time
    for (let j = 0; j < cols; j++) {
      arr[i][j] = 0;
      for (let k = 0; k < b.length; k++) {
        arr[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const a = [
  [1, 2],
  [3, 4],
];
const b = [
  [5, 6],
  [7, 8],
];
multiplyMatrix(a, b);
