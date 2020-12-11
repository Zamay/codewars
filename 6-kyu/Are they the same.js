// function comp(array1, array2){
//     if ( array1 === [] || array2 === [] || array1 == null ) return false;
//     array1.filter((el) => {
//         debugger
//         array2.findIndex( (e, i) => {
//             if (el*el === e) {
//                 (i === 0)? array2.splice(0, 1) :  array2.splice(i, i);
//                 return true;
//             }
//         })
//     });
//     return array2.length === 0;
// }

a1 = [ 66, 29, 58 ];
a2 = [ 4356, 841, 3364 ];
console.log(comp(a1, a2));

function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}