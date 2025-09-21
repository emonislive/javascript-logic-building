// ! Write a program that swap two numbers

function swap(a, b) {
  console.log(`Before: a = ${a}, b = ${b}`);
  
  // ? Method 1
  [a, b] = [b, a];

  // ? Method 2
  let temp = a;
  a = b;
  b = temp;

  console.log(`After: a = ${a}, b = ${b}`);
}

swap(10, 20);
