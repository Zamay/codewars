let palindromeChainLength = function(n) {
    let a = n;
    let b = +a.toString().split('').reverse().join('');
    let count = 0;
    while( a !== b) {
        a += b;
        b = +a.toString().split('').reverse().join('');
        count++;
    }
    return count;
};

console.log(palindromeChainLength(1));;
console.log(palindromeChainLength(88));;
console.log(palindromeChainLength(87));;