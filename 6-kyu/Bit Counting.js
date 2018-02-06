// test
// var countBits = function(n) {
//     let str = [];
//     asd(n);
//     return str.reduce((a, b) => a + b, 0);
//

// asd - это toString(2). Иззииии (( и не надо массив !
//     function asd(n) {
//         if (n !== 0) {
//             str.push(n % 2);
//             asd( parseInt(n / 2))
//         }
//     }
// };


// --------------------------------

countBits = n => n.toString(2).split('0').join('').length;

// --------------------------------



console.log(countBits(1234));
console.log(countBits(0));
console.log(countBits(1));
console.log(countBits(10));
