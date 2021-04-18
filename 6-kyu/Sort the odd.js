function sortArray(array) {
  // let arrKey = [];
  // let arrVal = [];
  // let newArray = array.slice(0);
  //
  // for (i in array) {
  //   if(array[i] % 2 !== 0) {
  //     arrKey.push(i);
  //     arrVal.push(array[i]);
  //   }
  // }
  //
  // return arrVal
  //   .sort( (a, b) => a - b)
  //   .reduce( (cur, next, i, arr) => {
  //     cur[arrKey[i]] = arr[i];
  //     return newArray;
  //   }, newArray)


  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

/*
* 0:1
* 3:13
* 4:5
* 8:15
*
* 0:1
* 4:5
* 3:13
* 8:15
*
* */
