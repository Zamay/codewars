function deleteNth(arr,n){
    // let item = {};
    // return arr.reduce( (ar, el) => {
    //     if (item[el] === undefined) {
    //         ar.push(el);
    //         item[el] = 1;
    //     } else if (item[el] < n) {
    //         ar.push(el);
    //         item[el] += 1;
    //     }
    //     return ar;
    // } , []);

    let m = {};
    return arr.filter( v => (m[v] = m[v]+1||1) <= n );
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
