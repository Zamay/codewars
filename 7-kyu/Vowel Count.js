function getCount(str) {
    // var vowelsCount = 0;
    // var arr = ['a', 'e', 'i', 'o', 'u'];
    //
    // str.split('').map( (i) => {
    //     if (arr.includes(i)){
    //         vowelsCount += 1;
    //     }
    // });
    //
    // return vowelsCount;


    // ----------------
    let arr = ['a', 'e', 'i', 'o', 'u'];
    return str.split('')
        .filter((i) => arr.includes(i))
        .length

}
getCount('dasdasdasd wqdaxcw');