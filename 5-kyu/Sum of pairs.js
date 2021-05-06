function sumPairs(ints, s) {
    // let sumArr = {};
    // let arr = [];
    // for (let i = 0, l = ints.length; i < l; i++){
    //     for (let j = i+1; j <= l; j++){
    //         if (ints[i] + ints[j] === s)
    //             sumArr[j] = [ints[i], ints[j]] 
    //     }
    // }

    // return Object.values(sumArr)[0] || undefined

    ////////////
    // if (ints.length < 2) return undefined;
    // let intSet = new Set()
    // intSet.add(ints[0]);
    // debugger
    // for (let i=1; i < ints.length; ++i){
    //   let needed = s-ints[i];
    //   if (intSet.has(needed)){
    //     return [needed,ints[i]];
    //   }
    //   intSet.add(ints[i]);
    // }
    // return undefined;

    ////////
    let seen = new Set();
    for (let i of ints) {
        if (seen.has(s - i)) return [s - i, i];
        seen.add(i);
    }

    ////////
    // let seen = {}
    // for (let i = 0; i < ints.length; ++i) {
    //   if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    //   seen[ints[i]] = true
    // }
  }

//   console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
  console.log(sumPairs([6, 5, 2, 3, 4, 7, 5], 10));