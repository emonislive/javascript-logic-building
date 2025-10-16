function isLeapYear(year: number): boolean {
    let flag = false;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        flag = true;
    
    return flag;
}

console.log(isLeapYear(2002));
