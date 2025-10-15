interface TypeDefine{
    (number1: number, number2: number): number;
}

function print(result: number) {
    console.log(result);
}

const sum: TypeDefine = (number1, number2) => {
    return number1 + number2;
}

console.log(sum(10, 20));
