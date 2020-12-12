function rot(strng) {
    // your code
    // return strng.split("\\n").reverse().map(x => x.split("").reverse().join("")).join("\\n");
    return strng.split("").reverse().join("");
}
function selfieAndRot(strng) {
    // your code
    let str = strng
        .split("\n")
        .map( x =>  x + '.'.repeat(x.length) )
        .join("\n")

    let strs = strng
        .split("\n")
        .reverse()
        .map(x => x.split("").reverse().join(""))
        .map( x => '.'.repeat(x.length) + x )
        .join("\n");

    return str + "\n" + strs;
}
function oper(fct, s) {
    // your code
    return fct(s);
}

console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"));
console.log(oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"));



/////////////////////////////////
// const rot = s => s.split('\n').reverse().map(s => [...s].reverse().join('')).join('\n');
// const selfieAndRot = s => (s = s.split('\n').map(s => s + '.'.repeat(s.length) + '\n').join(''), (s + rot(s)).replace('\n\n', '\n'));
// const oper = (fct, s) => fct(s)



//////////////////////////////////
// function rot(s) {
//     return s.split("").reverse().join("");
// }
//
// function selfieAndRot(s) {
//     return (s = s.replace(/.+/g, t => t + t.replace(/./g, "."))) + "\n" + rot(s);
// }
//
// function oper(fn, s) {
//     return fn(s);
// }
