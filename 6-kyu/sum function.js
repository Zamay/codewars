function sum(...a) {
    return a.length === 2 ? a[0] + a[1] : function (x) {
        return a[0] + x;
    };
}

// function sum(x, y) {
//     if (y === undefined) {
//         return function (y) {
//             return x + y;
//         }
//     }
//     return x + y;
// }

console.log(
    sum(2, 3),
    sum(2)(3));