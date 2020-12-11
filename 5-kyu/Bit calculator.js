function calculate(num1,num2){
    return toDEC(num1) + toDEC(num2);
}
function toDEC( dec ) {
    var out = 0, len = dec.length, bit = 1;
    while( len-- ) {
        out += dec[ len ] == "1" ? bit : 0;
        bit += bit;
    }
    return out;
}


// --------------------------
function calculate(num1,num2){
    let n1 = 0, n2 = 0;
    for (let i in num1)
        n1 += num1[i] == '1' ? Math.pow(2, num1.length-1-i) : 0;
    for (let i in num2)
        n2 += num2[i] == '1' ? Math.pow(2, num2.length-1-i) : 0;
    return n1 + n2;
}


console.log(
    calculate("1","1"),
    calculate("10","10"),
    calculate("10","0"),
    calculate("10","1")
);