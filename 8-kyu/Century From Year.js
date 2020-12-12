// function century(y) {
//     // return (y % 100 === 0) ? y / 100 : Math.trunc (y / 100) + 1;
//     return Math.ceil(y/100);
// }
//
// console.log(century(1705));
// console.log(century(1700));


var getDecimalValue = function(head) {
    let a = head.join("");
    return parseInt(a, 2);
};

console.log(getDecimalValue([1, 0, 1]));