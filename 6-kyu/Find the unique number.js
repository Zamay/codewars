function findUniq(arr) {
    let uniq = arr.filter( el => el !== arr[0])

    return uniq.length > 2 ? arr[0] : uniq[0];
  }
  
  console.log( findUniq([ 1, 1, 1, 2, 1, 1 ]) );
  console.log(findUniq([ 3, 10, 3, 3, 3 ]));