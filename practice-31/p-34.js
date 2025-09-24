// ! Write a program that checks if a given string of a parentheses is balanced and well formed.

function isValidParentheses(brackets) {
  let stack = [];
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "{" || brackets[i] === "[" || brackets[i] === "(") {
      stack.push(brackets[i]);
    } else {
      let lastIndex = stack.length - 1; // * act as top in stack
      if (
        stack.length === 0 ||
        (brackets[i] === "}" && stack[lastIndex] !== "{") ||
        (brackets[i] === "]" && stack[lastIndex] !== "[") ||
        (brackets[i] === ")" && stack[lastIndex] !== "(")
      ) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  
  return true;
}

const brackets = "{([])}";
console.log(isValidParentheses(brackets));
