function reverseString(str: string): string {
    const reversed = str.split("").reverse().join("");
    return reversed;
}

const str: string = "Typescript";
console.log(reverseString(str));
