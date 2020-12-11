function XO(str) {
    let count = str.toLowerCase()
        .split('')
        .reduce((a, b) => {
        if (b === "o" || b === "x") {
            a[b] = (!a[b]) ? 1 : a[b] + 1;
        }
        return a;
    }, {});

    return (count['x'] === count['o']);
}

/////////////////////

function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

/////////////////////

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}