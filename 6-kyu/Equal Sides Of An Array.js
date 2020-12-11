/**
 * Created by Mitya on 09.09.2017.
 */
function findEvenIndex(arr) {
    if (arr.reduce((p, c) => p + c) === 0) {
        return 0
    }
    let pos = 0,
        sum,
        boof;
    for (let i = 1, j = 0; i < arr.length; ) {
        boof = arr[0];
        pos += arr.shift();
        sum = arr.reduce((p, c) => p + c);
        if (pos - boof !== sum) {
            j++;
            continue;
        }
        return j
    }
    return -1
}

// console.log(findEvenIndex([1, 2, 3, -1, -2, -3]));
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1, 5]));

/////////////////////////////////////////////////////////////////
function findEvenIndex(arr)
{
    for(var i=1; i<arr.length-1; i++) {
        if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
            return i;
        }
    }
    return -1;
}