function validParentheses(parens){
    if (parens.length % 2 !== 0 || parens[0] === ')') return false;
    let sum = 0
    for (let i = 0, l = parens.length; i < l; i++) {
        (parens[i] === '(') ? sum += 1 : sum -= 1;
        if (sum < 0) return false;
    }
    return sum === 0;
  }

  console.log(validParentheses( "()()((()" ));