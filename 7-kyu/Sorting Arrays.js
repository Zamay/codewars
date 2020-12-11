//Сортировка по первой букве первого массива каждого слова...

function sortArray(a1, a2) {
    return a1.map(item => a2.find(el => el[0] === item[0]))
}

let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

console.log(sortArray(a1, a2));
//[ 'geko', 'octopus', 'iguana', 'eagle', 'rattlesnake' ]
