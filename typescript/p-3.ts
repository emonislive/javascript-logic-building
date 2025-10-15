function area(width: number, length: number): number {
    return width * length;
}

const answer: number = parseFloat(area(10.99, 42.49).toFixed(2));
console.log(answer);
