function mergeArrays(a, b) {
    // your code here
    let aa = a.length;
    let bb = b.length;
    let d = aa >= bb ? aa : bb;
    let c = [];

    for(let i = 0; i < d; i++) {
        if (a[i]) c.push(a[i]);
        if (b[i]) c.push(b[i]);
    }
    
    console.log(c);
  }

//   mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])
//   mergeArrays([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e'])
  mergeArrays([ 32, 32, 11, 57, 28, 59 ], [ 'h', 't', 'm', 'i', 'h', 'h', 'l', 'e' ])
