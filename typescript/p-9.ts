function sum(num: number) {
    let sumOfDigits: number = 0;
    while (num > 0) {
        sumOfDigits += num % 10;
        num = Math.floor(num / 10)
    }
    console.log(sumOfDigits);
}
sum(1234);
