function solve(x, y) {
    var arr;
    var a;
    var b;
    var count = 0;
    for (var i = x; i < y; i++) {
        arr = i.toString();
        a = arr.split('').every((val) =>
            (val == 0 || val == 1 || val == 8 || val == 6 || val == 9));
        b = arr.split('')
            .map((val, i) => {
                if (a) {
                    if (val == '6') {
                        return val = '9';
                    }
                    if (val == '9') {
                        return val = '6';
                    }
                    return val;
                }

            })
            .reverse()
            .join('');

        if (arr == b) {
            count += 1;
        }
    }
    return count;
}

console.log(solve(0, 10));
console.log(solve(10, 100));
console.log(solve(100, 1000));
console.log(solve(1000, 10000));