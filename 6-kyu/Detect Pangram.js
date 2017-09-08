/**
 * Created by Mitya on 07.09.2017.
 */
function isPangram(string){
    let asd = true;
    let arr = string.toLowerCase().replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').split('').sort();
    let lang = "abcdefghijklmnopqrstuvwxyz".split('').map(val => {
        if ( !arr.includes(val) ) asd = false;
    })
    console.log(asd);
}

console.log(isPangram("The quick brown fox jumps over the lzy dog."));

///////////////////////////////////////////////////////////

function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
//////////////////////////////////////////////////////////
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}