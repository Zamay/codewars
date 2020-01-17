function duplicateCount(text){

    return text
        .toLowerCase()
        .split('')
        .reduce(function(a, l) {
            a[l] = a[l] ? a[l]+1 : 1;
            if(a[l] === 2) a.count++;
            return a;
        }, {count:0}).count;


    // let arr = text.toLowerCase().split('');
    // let obj = arr.reduce((items, item) => {
    //     if (items[item] == null) {
    //         items[item] = 0;
    //     } else {
    //         items[item] = items[item] + 1;
    //     }
    //     return items;
    // }, {});


    ////1
    // let sum = Object.values(obj).reduce((a, b) => {
    //     if(b > 0) {
    //       a += 1;
    //     }
    //
    //     return a;
    // }, 0);


    ////2
    // let sum = 0;
    // for( let el in obj ) {
    //     // if( obj.hasOwnProperty( el ) ) {
    //         if(obj[el] > 0) {
    //             sum += 1;
    //         }
    //     // }
    // }


    // console.log(sum);
}
duplicateCount("Indivisibilities");