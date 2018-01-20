function removeSmallest(n, arr) {
    if (n < 1) return arr;
    if (n >= arr.length) return [];

    // не совсем правильно ...
    for (let i = 0; i < n; i++) {
        let temp = 99999;
        arr.forEach(val => {
            if (temp > val) {
                temp =  val;
            }
        });

        arr.splice(arr.indexOf(temp), 1);
    }
    return arr;
}
console.log(
removeSmallest(0, [1, 2, 3, 4, 5]),
removeSmallest(5, [5, 3, 2, 1, 4]),
removeSmallest(2, [5, 3, 2, 1, 4]),
removeSmallest(3, [5, 3, 2, 1, 4]),
removeSmallest(4, [5, 3, 2, 1, 4])
);