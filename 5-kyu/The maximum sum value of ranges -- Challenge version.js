function maxSum(arr,range){
    // let arrMax = [];
    // for (const i of range) {
    //     arrMax.push(arr.slice(i[0], i[1]+1).reduce((a, b) => a + b, 0));
    // }
    // return Math.max(...arrMax);

    /////////
    // const newArr = range.map( el => {
    //     return arr.slice(el[0], el[1]+1).reduce((a, b) => a + b, 0)
    // })
    // return Math.max(...newArr);

    /////////
    return Math.max(...range.map(i => arr.slice(i[0], i[1] + 1).reduce((a, b) => a + b)))

    /////////  ?????? 
    // let left = [ 0 ]
    // ,  total = 0;
    
    // for (let num of arr)
    //     left.push(total += num);

    // let sums = range.map(([a, b]) => left[b + 1] - left[a]);
    
    // return Math.max(...sums);

  }


  console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]));


arr = [-57120,-55241,-96174,12139,-10730,33106,-41078,84249,33381,-60089,-24328,62115,-74963,-80551,14482,88976,5155,-8313,39993,-70360,-74043,-44482,34849,-98812,-98381,-32106,13589,-47086,63744,-74177,-2100,-1219,-31439,27591,-8608,3068,-80587,-46693,-73706,40798,-84389,5434,-79963,54815,77160,55975,36842,-61158,59592,9050,-19010,-6201,-41265,-66494,53091,-75632,-81419,54421,-77969,-16863,-44832,37443,-6172,-32970,65211,68810,-75273,-44995,39220,49992,-60904,48738,64790,56110,64893,68384,4825,29626,85741,12590,81741,42893,76509,78885,-18678,80416,54754,53204,31321,-92744]
range = [[45,67],[52,76]]
console.log(maxSum(arr, range));
