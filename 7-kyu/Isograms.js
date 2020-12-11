function isIsogram(str){
    let obj = {};
    let arr = str.toLowerCase().split("");
    for (let i of arr) {
        obj[i] = (obj[i] || 0) + 1;
        if( obj[i] === 2)
            return false;
    }
    return true;

    // return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));