// найти число которое больше всего раз повторяеться !
// Есть таких 2 , то выбрать у кого значение больше

function highestRank(arr){
    // let obj = {};
    // arr.forEach(item => {
    //     if(obj[item] === undefined)
    //         obj[item] = 0;
    //     obj[item] += 1;
    // });
    //
    // let max = 0, i, j = 0;
    // for( i in obj) {
    //     if( obj[i] >= max) {
    //         if( +i > +j ) {
    //             j = +i;
    //         }
    //         max = obj[i];
    //     }
    // }
    // return j;

    // ----------
    let high, max=0, rec={};
    for(let x of arr){
        rec[x]=(rec[x]||0)+1;
        if(rec[x]>max){
            max=rec[x];
            high=x;
        }
    }
    return high;
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr);
// 12