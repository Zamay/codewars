function findOdd(A) {
    let obj = {}
    A.map(val => ( obj[val] === undefined)?
        obj[val] = 1 : obj[val] += 1);

    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            return +key;
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5));

////////////////////////////////////
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);