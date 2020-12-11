/**
 * Created by Mitya on 05.09.2017.
 */
function findOutlier(int){

    let even = int.filter(a=>a%2==0);
    let odd = int.filter(a=>a%2!==0);
    return even.length===1? even[0] : odd[0];


    // let pair = {};
    // let unpair = {};
    //
    // integers.forEach(n => {
    //     if (n % 2) {
    //         pair[n] = pair[n] ? pair[n]+1 : 1;
    //     } else {
    //         unpair[n] = unpair[n] ? unpair[n]+1 : 1;
    //     }
    // });
    //
    // return Object.keys(unpair).length === 1 && Object.values(unpair)[0] < 2 ?
    //     +Object.keys(unpair)[0] : +Object.keys(pair)[0];

}

//
console.log(findOutlier([ 0, 0, 3, 0, 0 ])); // 1
console.log(findOutlier([ 1, 1, 0, 1, 1 ])); // 1
console.log(findOutlier([1, 3, 5, 6, 7])); // 6
console.log(findOutlier([ 17, 6, 8, 10, 6, 12, 24, 36 ])); // 6