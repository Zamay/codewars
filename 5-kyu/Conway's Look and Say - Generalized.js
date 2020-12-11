function lookSay(number){
    let num = number.toString();
    let str = '',
        count = 1;
    for (let i = 1, l = num.length; i < l; i++) {
        if (num[i] !== num[i - 1]) {
            str += count.toString() + num[i-1];
            count = 0;
        }
        count++;
    }
    str += count.toString() + num[num.length-1];
    return Number(str);
}

console.log(
    lookSay(0),
    lookSay(2014)
);