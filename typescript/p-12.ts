interface TypeDefine {
    str: string;
    size: number;
    start: number;
    end: number;
    flag: boolean;
}

function createData(str_data: string): TypeDefine {
    return {
        str: str_data,
        size: str_data.length,
        start: 0,
        end: str_data.length - 1,
        flag: true,
    };
}

const data = createData("maam");

for (let left = data.start, right = data.end; left < right; left++, right--) {
    if (data.str[left] != data.str[right]) {
        data.flag = false;
        break;
    }
}
console.log(data.flag);
