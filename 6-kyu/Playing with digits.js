
function digPow(n, p) {
    let arr = n.toString().split('');
    let sum = 0;
    for (let i = p, j= 0; j < arr.length; i++, j++){
        // sum += arr[j]**i;
        sum += Math.pow(arr[j],i);
    }
    return sum % n ? -1 : sum / n
}

console.log(digPow(114,3));

////////////////////////////////////////////////
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0);
    return x % n ? -1 : x / n
}
