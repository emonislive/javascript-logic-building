const num: number = 10;
let factorial: number = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial ${num}:`,factorial)
