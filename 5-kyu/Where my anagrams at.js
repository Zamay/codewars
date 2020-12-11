/**
 * Created by Mitya on 05.09.2017.
 */
function anagrams(word, words) {
    let arrs = [];
    let w = word.split('').sort().join('');
    let arrW = words.map(val => val.split('').sort().join(''));
    for (let i = 0; i < arrW.length; i++){
        if ( arrW[i] === w) {
            arrs.push(words[i])
        }
    }
    return arrs
}

(anagrams('laser', ['lazing', 'lazy', 'laser', 'laser', 'lacer']));

///////////////////////////////////////////////////////////////

function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter((v) => word == v.split('').sort().join('') );
}

//////////////////////////////////////////////////////////////
function anagrams(word, words) {
    return words.filter(function (e) {
        return e.split('').sort().join('') === word.split('').sort().join('');
    })
}