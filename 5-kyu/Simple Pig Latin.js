// Переместите первую букву каждого слова в его конец, затем добавьте «ау» в конец слова. 
//
function pigIt(str){
  let strArr = str.split(' ')
  return strArr.map( s => {
    if (!testString(s)) return s;

    return s.slice(1) + s[0] + 'ay';
  }).join(" ")
}

function testString(s){
  return /[a-zA-Z]/gi.test(s);
}

//////// 2 решение 
// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

//////// 3e
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

console.log( pigIt('Pig latin is cool')); 
console.log( pigIt('This is my string !'));