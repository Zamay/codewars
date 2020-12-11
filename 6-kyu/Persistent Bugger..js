/**
 * Created by Mitya on 09.09.2017.
 */
function persistence(num) {
    let sum = 0,
        arr = num;
    // или написать рекурсивную функцию
    for(;  ;) {
        arr = arr.toString().split('');
        if (arr.length > 1){
            sum += 1;
            arr = arr.reduce((pre, curr) => {
                return +pre * +curr
            });
            continue
        }
        return sum
    }
}

console.log(persistence(999));

//////////////////////////////////////////////////////////////////////////

function persistence(num) {
    var times = 0;
    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }

    return times;
}