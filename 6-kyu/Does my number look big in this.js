/**
 * Created by Mitya on 05.09.2017.
 */
function narcissistic( value ) {
    let sum = 0;
    let num = value.toString().split('');
    let length = num.length;
    for (let i in num) {
        sum += Math.pow(num[i],length)
    }

    return (sum == value)? true : false
}

console.log(narcissistic(371));
/////////////////////////////////////////////

function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
            return p + Math.pow(c, ('' + value).length)
        }, 0) == value;
}
