// function longestConsec(strarr, k) {
//     if (k > strarr.length)
//         return "";
//     let j = strarr.length - k + 1;
//     let strmax = "";
//
//     for (let i = 0; i < j; i++) {
//         let str = "";
//         for (let n = i; n < i + k; n++) {
//             str += strarr[n]
//         }
//
//         strmax.length > str.length ? "" : strmax = str;
//     }
//
//     return strmax;
//
// }

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return '';
    }

    return strarr.reduce((long, item, i) => {
        const currString = strarr.slice(i, i + k).join('');
        return (currString.length > long.length)
            ? currString
            : long;
    }, '');
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
console.log(longestConsec([], 3));