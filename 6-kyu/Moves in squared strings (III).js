function rot90Clock(strng) {
    // your code
    return diag1Sym(strng).map( el => el.split("").reverse().join("") )
}
function diag1Sym(strng) {
    return strng.split("\n").map( (el, i, arr) => {
        let s = '';
        for (let y = 0; y < el.length; y++){
            s += arr[y][i];
        }
        return s;
    })

}
function selfieAndDiag1(strng) {
    // your code
    let a = strng.split("\n");
    let b = diag1Sym(strng);
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] + b[i]);
    }
    return c;
}
function oper(fct, s) {
    // your code
    return fct(s).join("\n");
}

// console.log(diag1Sym("wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ"));
// console.log(selfieAndDiag1("NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg"));
// console.log(rot90Clock("rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb"));

// console.log(oper(diag1Sym, "abcd\nefgh\nijkl\nmnop"));
// console.log(oper(selfieAndDiag1, "NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg"));
// console.log(oper(rot90Clock, "abcd\nefgh\nijkl\nmnop"));
// Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle


/////////////////////////////////////////////
/*
    const getFirstCharOfEach = (_, i, arr) =>
        arr.map(y => y.slice(i, i + 1)).join('')

    const oper = (fct, s) =>
        fct(s.split('\n')).join('\n')

    const rot90Clock = arr =>
        arr.reverse().map(getFirstCharOfEach)

    const diag1Sym = arr =>
        arr.map(getFirstCharOfEach)

    const selfieAndDiag1 = arr =>
        diag1Sym(arr).map((x, i) => `${[...arr][i]}|${x}`)

*/

/////////////////////////////////
/*
    const diag1Sym = s => s.map((v, i) => [...v].map((_, j) => s[j][i]).join(''))
    const rot90Clock = s => diag1Sym(s).map(v => [...v].reverse().join(''))
    const selfieAndDiag1 = s => {
      const r = diag1Sym(s)
      return s.map((v, i) => v + '|' + r[i])
    }
    const oper = (fct, s) => fct(s.split('\n')).join('\n')
* */