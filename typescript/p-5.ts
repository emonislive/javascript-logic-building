const arr: number[] = [4,1,3,0];

const minimum = () => {
    let smallNumber: number = arr[0];
    arr.forEach((element) =>{
        if (element < smallNumber) smallNumber = element;
    })
    return smallNumber;
}

console.log(minimum());
