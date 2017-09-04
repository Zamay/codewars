/**
 * Created by Mitya on 05.09.2017.
 */
function spinWords(str){
    return str.split(" ")
        .map(val => (val.length > 4) ? val.split("").reverse().join(""): val )
        .join(' ')
}

console.log(spinWords("Hey fellow warriors"));