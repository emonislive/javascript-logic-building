// ! Write a program that transposes a given matrix (swaps rows and columns)

function matrixSwap(matrix) {
  const rows = matrix.length;
  let newMatrix = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j] = []; // * initializing each column of newMatrix
    }
  }

  for (let i = 0; i < rows; i++) {
    let cols = matrix[i].length;
    for (let j = 0; j < cols; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }

  for (let i = 0; i < newMatrix.length; i++) {
    console.log(newMatrix[i]);
  }
}

const matrix = [
  [3, 4, 8],
  [5, 6, 9],
  [7, 8, 1],
];
matrixSwap(matrix);
