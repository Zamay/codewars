function getSum(a, b) {
    // let sum = 0;
    // if(a > b) {
    //     b = [a, a = b][0]
    // }
    // for(let i = a; i <= b; i++){
    //     sum += i;
    // }
    // return sum;

    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
    // 5 - -3 + 1 * 5 + -3 / 2
    // 9 * 2 / 2
    // 9
    // 3 - 1 + 1 * 3 + 1 / 2
    // 3 * 4 / 2
    // 6
}

console.log(getSum(0, -1));
console.log(getSum(-1, 2));
console.log(getSum(1, 3));
console.log(getSum(5, -3));
console.log(getSum(1, 1));