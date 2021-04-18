function findMissingLetter(array){
    // const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // let ind, missLet = '', arr = arr_en;
    // if (array[0].toUpperCase() === array[0]) {
    //     arr = arr_EN;
    // }

    // ind = arr.findIndex(el => el === array[0]);
    // for (let i = 0, l = array.length; i < l; i++, ind++){
    //     if (arr[ind] !== array[i]) return missLet = arr[ind];
    // }

    // return missLet;

    let i = array[0].charCodeAt();
    array.map(x => x.charCodeAt() == i ? i++ : i);
    return String.fromCharCode(i);
}


console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));