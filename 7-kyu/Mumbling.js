function accum(s) {
   return  s.toLowerCase().split("").reduce( (s, el, i, arr) => {
        s += el.toUpperCase();
        for(let j = 0; j < i; j++) {
            s += el;
        }

        s += (arr.length-1  === i ? "" : "-");
        return s;
    }, "");



    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum("ZpglnRxqenU"));

