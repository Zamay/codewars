function list(names){
    return names.reduce(function(prev, current, index, array){
        if (index === 0){
            return current.name;
        }
        else if (index === array.length - 1){
            return prev + ' & ' + current.name;
        }
        else {
            return prev + ', ' + current.name;
        }
    }, '');


    //////////////////////////////////////

    // if (names.length === 0) return '';
    // if (names.length === 1) return names[0].name;
    // let str = '';
    //
    // for (let i in names) {
    //     if(i < names.length -2) {
    //         str += names[i].name + ', ';
    //     } else {
    //         return str += names[i].name + ' & ' + names[names.length-1].name;
    //     }
    // }
}
console.log(
    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
);