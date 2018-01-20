bind = function(list, func) {
//   let arr = []
//   list.forEach(val => {
//     arr.push(func(val)[0]);
//   })
//   return arr;

//     return list.map(val => {
//         let temp = func(val);
//         // ех...
//         // if (typeof temp !== "object")
//         //     throw new Error('Whoops!');
//         if (temp.length === 1)
//             return temp[0];
//         else
//             return  temp.concat();
//     });
// };

// ---------------------

function bind(list, fn) {
    return list.map(function(x) {
        var y = fn(x)
        if (!Array.isArray(y)) throw new Error()
        return y
    }).reduce(function(a, x) {
        return a.concat(x)
    }, [])
}