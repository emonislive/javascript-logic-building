function swap(a: number, b: number) {
  console.log(`Before: a = ${a}, b = ${b}`);
  [a, b] = [b, a];
  console.log(`After: a = ${a}, b = ${b}`);
}

swap(10, 20);
