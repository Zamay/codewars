function digital_root(n) {
    // let sum = n.toString().split('').reduce((pre, curr) => +pre + +curr) + '';
    //
    // if (sum.length > 1) {
    //     return digital_root(sum);
    // }
    //
    // return +sum

    // ----------------

    console.log(
        38 % 9
    )
    return (n - 1) % 9 + 1;
}

console.log(digital_root(1239));