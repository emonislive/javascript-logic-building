// ! Write a program that builds a very basic calculator.
// ??? First install "npm install prompt-sync

const prompt = require("prompt-sync")();

function division(a, b) {
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

function subtraction(a, b) {
  return a - b;
}

function addition(a, b) {
  return a + b;
}

function calculator() {
  console.log("\n----------SIMPLE CALCULATOR---------\n");
  let a = prompt("Enter 1st number: ");
  let b = prompt("Enter 2nd number: ");

  // ✅ validate numbers
  if (isNaN(a) || isNaN(b)) {
    console.log("Invalid input! Please enter valid numbers.");
    return;
  }

  console.log("\n----- Options -----\n");
  console.log("1. Addition       (a + b)");
  console.log("2. Subtraction    (a - b)");
  console.log("3. Multiplication (a * b)");
  console.log("4. Division       (a / b)\n");

  let operation = prompt("Choose your option: ");

  a = parseFloat(a);
  b = parseFloat(b);
  operation = parseInt(operation);

  // validate option
  if (![1, 2, 3, 4].includes(operation)) {
    console.log("Invalid option! Choose between 1 and 4.");
    return;
  }

  // prevent division by zero
  if (operation === 4 && b === 0) {
    console.log("Division by zero is not allowed.");
    return;
  }

  switch (operation) {
    case 1:
      console.log("\nResult:", addition(a, b));
      break;
    case 2:
      console.log("\nResult:", subtraction(a, b));
      break;
    case 3:
      console.log("\nResult:", multiplication(a, b));
      break;
    case 4:
      console.log("\nResult:", division(a, b));
      break;
  }
}

calculator();
