function getCard()
{
    let num = [];
    while (num.length < 5)
    {
        let rn = 'B' + Math.floor((Math.random() * 15) + 1).toString();
        if (num.indexOf(rn) == -1)
            num.push(rn);
    }
    while (num.length < 10)
    {
        let rn = 'I' + Math.floor((Math.random() * 15) + 16).toString();
        if (num.indexOf(rn) == -1)
            num.push(rn);
    }
    while (num.length < 14)
    {
        let rn = 'N' + Math.floor((Math.random() * 15) + 31).toString();
        if (num.indexOf(rn) == -1)
            num.push(rn);
    }
    while (num.length < 19)
    {
        let rn = 'G' + Math.floor((Math.random() * 15) + 46).toString();
        if (num.indexOf(rn) == -1)
            num.push(rn);
    }
    while (num.length < 24)
    {
        let rn = 'O' + Math.floor((Math.random() * 15) + 61).toString();
        if (num.indexOf(rn) == -1)
            num.push(rn);
    }
    return num;
}

// ----------------------------------------
function genRange(arr, letter, start, end, count) {
    var taken = [];
    for(var i = 0; i < count; ) {
        r = Math.floor(Math.random() * (end - start) + start);
        if(taken.indexOf(r) == -1) {
            taken.push(r);
            arr.push(letter + r);
            i++;
        }
    }
}
function getCard()
{
    var arr = [];
    genRange(arr, "B", 1, 15, 5);
    genRange(arr, "I", 16, 30, 5);
    genRange(arr, "N", 31, 45, 4);
    genRange(arr, "G", 46, 60, 5);
    genRange(arr, "O", 61, 75, 5);
    return arr;
}
// -------------------------------------------
function getCard() {
    let range = {
        'B': [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15],
        'I': [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        'N': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        'G': [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        'O': [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
    };
    return [
        'B', 'B', 'B', 'B', 'B',
        'I', 'I', 'I', 'I', 'I',
        'N', 'N',      'N', 'N',
        'G', 'G', 'G', 'G', 'G',
        'O', 'O', 'O', 'O', 'O'
    ]
        .map(c => c + range[c].splice(Math.random() * range[c].length | 0, 1));
}