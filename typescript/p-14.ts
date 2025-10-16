interface TypeDefine {
    readonly consonants: string;
    readonly vowels: string;
    str: string;
    size: number;
    vowelCount: number;
    consonantCount: number;
}

function createData(str_data: string): TypeDefine {
    return {
        consonants: "bcdfghjklmnpqrstvwxyz",
        vowels: "aeiou",
        str: str_data,
        size: str_data.length,
        vowelCount: 0,
        consonantCount: 0,
    }
}

function countVowelConsonant(data: TypeDefine): {vowelCount: number, consonantCount: number} {
  data.str = data.str.toLowerCase();
  
  for (let i = 0; i < data.size; i++) {
    if (data.vowels.includes(data.str[i])) {
      data.vowelCount++;
    } else {
        if (data.consonants.includes(data.str[i])) {
          data.consonantCount++;
        } 
    }
  }
  return { vowelCount: data.vowelCount, consonantCount: data.consonantCount };
}

const msg = createData("ABcdefghijk 1213 34 a");
console.log(countVowelConsonant(msg));
