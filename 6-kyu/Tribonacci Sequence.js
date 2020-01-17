function tribonacci(arr,n){
    if (n === 0) return [];

    let a = arr[0], b = arr[1], c = arr[2];

    for(let i = arr.length ; i < n; i++){
        let temp = a + b + c;
        a = b;
        b = c;
        c = temp;
        arr.push(temp);
    }
    return n < 4 ? arr.slice(0, n) : arr;
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 10));

//
// function tribonacci(sign,n){
//     for (var i = 3; i < n; i++) {
//         sign[i] = sign[i-1] + sign[i-2] + sign[i-3];
//     }
//     return sign.slice(0, n);
// }