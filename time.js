

//
// const add = (a) => {
//     let sum = a;
//     const func = (b) => {
//         sum += b;
//         return func;
//     };
//     func.valueOf = () => sum;
//     return func;
// };
// console.log(add(2)(3)(4).valueOf()); // 5;

// ============================

// function calcFib(x) {
//     if (!calcFib.cache[x]) {
//         if (x > 1) {
//             calcFib.cache[x] = calcFib(x - 1) + calcFib(x - 2);
//         }
//         else {
//             calcFib.cache[x] = x;
//         }
//     }
//     return calcFib.cache[x];
// }
//
// calcFib.cache = {};
//
// for (var i = 0; i < 40; i++) {
//     // console.log(calcFib(i));
//     (calcFib(i));
// }



// // -------------------
// // проверка слов
// let str1 = 'qwerty';
// let str2 = 'erwtqyb';
//
// function asd(a, b) {
//     if (a.length !== b.length)
//         return false;
//
//     let obj = {};
//     for (let i = 0; i < a.length; i++) {
//         !obj[str1[i]] ?
//             obj[str1[i]] = 1 : obj[str1[i]] += 1;
//     }
//     for (let i = 0; i < b.length; i++) {
//
//         //TODO: проверка на -1 -> false
//         if (obj[str2[i]]) {
//             obj[str2[i]] -= 1
//         }
//         if (obj[str2[i]] === 0) {
//             delete obj[str2[i]]
//         }
//     }
//      return true
// }
//
// console.log(
//     asd(str1, str2)
// )

// -------------------

// проверка на возрастание

// let a = [1,2,3,5,6,7,8];
// let b = [1,2,3,8,11,6,7,8];
// let c = [4,4,4,4,3,2,1,0];
// let d = [1,1,1,1,2,3,3,3,3,4];
//
// function sorts(arr) {
//     // let q = arr[0],
//     //     w = arr[1],
//     //     result = 1,
//     //     i = 2;
//     // if (w >= q) {
//     //     for (i; i < arr.length; i++) {
//     //         if (w >= q) {
//     //             q = w;
//     //             w = arr[i];
//     //         } else {
//     //             result = 0;
//     //         }
//     //     }
//     // } else if (q >= w) {
//     //     for (i; i < arr.length; i++) {
//     //         if (q >= w) {
//     //             q = w;
//     //             w = arr[i];
//     //         } else {
//     //             result = 0;
//     //         }
//     //     }
//     // } else {
//     //     result = 0;
//     // }
//     // console.log(result);
//     // return (result > 0)
//
//     let arr2 = arr.join('');
//     let arr1 = arr.slice().sort((a, b) => a - b);
//     return ( arr2 === arr1.join('') || arr2 === arr1.reverse().join('') ) ? true : false;
//
// }
// console.log(
// sorts(a),
// sorts(b),
// sorts(c),
// sorts(d)
// );

// ------------------- нахождение одинаковых чисел

// a = [1,2,3,4,5];
// b = [4,5,6,7,8];
//
// function asd(arr1, arr2) {
//     // let sum = [];
//     // arr1.forEach( val =>  {
//     //     if ( arr2.includes(val) ) {
//     //         sum.push(val);
//     //     }
//     // })
//     // return sum;
//
//     // return ( arr1.map(
//     //             val =>  arr2.find( item => item === val ) )
//     //        ).filter( i => i )
//
//     // return arr1.filter( val => arr2.find( i => i === val ) )
//     return arr1.filter( val => arr2.includes(val))
//
// }
//
// console.log(asd(a, b));


// ---------------------------
//
//
// // Подсчет времени видео в формате 22:21:12
// let arrElems = document.querySelectorAll('ul > li > em');
// let arrTime = [];
// for (let i in arrElems) {
//     if (typeof arrElems[i] == "object" ){
//         arrTime.push(arrElems[i].textContent);
//     }
// }
//
// // let smallArr = arrTime.slice(32, 58);
//
// let sec = arrTime.map( item => {
//     let arrSplitTime = item.split(':');
//     let h = parseInt(arrSplitTime[0]) * 3600;
//     let m = parseInt(arrSplitTime[1]) * 60;
//     let s = parseInt(arrSplitTime[2]);
//
//     return h + m+ s;
// } ).reduce( (a, b) => a + b);
//
// function humanReadable(seconds) {
//     let pad = function(x) { return (x < 10) ? "0"+x : x; };
//     return pad(parseInt(seconds / (60*60))) + ":" +
//         pad(parseInt(seconds / 60 % 60)) + ":" +
//         pad(seconds % 60)
// }
//
// humanReadable(sec);
//
