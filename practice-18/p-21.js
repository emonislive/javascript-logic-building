// ! Write a program that swap two numbers

function swap(a, b) {
  console.log(`Before: a = ${a}, b = ${b}`);

  // ? Method 1
  [a, b] = [b, a];

  // ? Method 2
  let temp = a;
  a = b;
  b = temp;

  // ? Method 3
  a = a + b; // * a = (10 + 20) = 30
  b = a - b; // * b = (30 - 20) = 10
  a = a - b; // * a = (30 - 10) = 20

  console.log(`After: a = ${a}, b = ${b}`);
}

swap(10, 20);
