function alphabetPosition(text) {
    let alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return text
        .toLowerCase()
        .split("")
        .map(el => (alp.indexOf(el) + 1) )
        .filter(el => el > 0)
        .join(" ");
}
alphabetPosition("The sunset sets at twelve o' clock.");
