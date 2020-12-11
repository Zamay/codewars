String.prototype.toJadenCase = function () {
    // return this.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    return this.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};
console.log("sds asd sad sd s dq q".toJadenCase());
