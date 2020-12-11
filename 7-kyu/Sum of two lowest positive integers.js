function sumTwoSmallestNumbers(numbers) {
    // return numbers.sort((a, b) => a > b ).slice(0, 2).reduce((a, b) => a + b)
    let [ a, b ] = numbers.sort((a, b) => a - b);
    return a + b
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));