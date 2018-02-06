function shiftedDiff(first, second) {
    if (first === second) return 0;
    if (first.length !== second.length) return -1;
    if ( (first.slice(1) + first.slice(0, 1)) === second ) return second.length -1;

    let str = first.slice(0, 2);
    return second.indexOf(str);
};

// ---------------------------------------

function shiftedDiff(first, second) {
    if (first.length != second.length) return -1;
    return (second + second).indexOf(first)
}

// ------------------------------
function shiftedDiff(first, second) {
    return (first.length == second.length) ? (second+second).indexOf(first) : -1;
}



console.log(
    shiftedDiff("eecoff", "coffee"),
    shiftedDiff("Moose", "moose"),
    shiftedDiff("isn't", "'tisn"),
    shiftedDiff("Esham", "Esham"),
    shiftedDiff(" ", " "),
    shiftedDiff("hoop", "pooh"),
    shiftedDiff("  ", " "),
);
