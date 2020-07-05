var uniqueInOrder=function(iterable){
    // return iterable.split("").reduce((n, el, i, arr) => {
    //     if (arr[i-1] !== el) {
    //         n.push(el)
    //     }
    //     return n;
    // }, []);

    // return iterable.split("").map((el, i, arr) => {
    //     if(arr[i-1] !== el) return el;
    // }).join("").split("");

    // return ( Array.isArray(iterable) ? iterable : iterable.split("")).filter((el, i, arr) => {
    //     if(arr[i-1] !== el) return el;
    // })

    return [...iterable].filter((a, i) => a !== iterable[i-1])
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([ 'a', 'b', 'b' ]));

