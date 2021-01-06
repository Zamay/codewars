// function solution(str){
//     if (str.length % 2 !== 0) str += "_";
//
//     return str.split("").map( (x, i, arr) => ( i % 2 === 0 ) ? x + arr[i+1] : "" ).filter( el => el !== "" )
// }

console.log(solution("abcdef"));
console.log(solution("abcdefg"));


function solution(str){
    let arr = [];
    for(let i = 0; i < str.length; i += 2){
        let second = str[i+1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}