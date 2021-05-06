function towerBuilder(nFloors) {
    let arr = []
    for(let i = 1, f = 1; f <= nFloors; i+=2, f++ ){
        let n = ((nFloors * 2 - 1) - i) /  2 ;
        let q = '*'.repeat(i);
        let w = ' '.repeat(n)
        let c = w + q + w;
        arr.push(c)
    }
    return arr;
  }

  console.log(towerBuilder(4));
