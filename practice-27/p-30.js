// ! Write a program that checks if the provided password is strong or not.

function passwordCheck(pass) {
  const len = pass.length;
  let check_1 = false;
  let check_2 = false;
  let check_3 = false;
  let check_4 = false;

  for (let i = 0; i < len; i++) {
    let ascii = pass.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      check_1 = true;
    }
    if (ascii >= 97 && ascii <= 122) {
      check_2 = true;
    }
    if (ascii >= 48 && ascii <= 57) {
      check_3 = true;
    }
    if ("!@".includes(pass[i])) {
      check_4 = true;
    }
  }

  if (check_1 && check_2 && check_3 && check_4 && len >= 8) {
    console.log("Strong Password!");
  } else {
    console.log("Weak Password");
  }
}

const pass = "12345678Aa@";
passwordCheck(pass);
