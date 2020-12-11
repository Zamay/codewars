function DNAStrand(dna){
    let item = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    return dna.split("").reduce((e, i) => e += item[i], "");
}

console.log(
    DNAStrand("ATTGC")
);