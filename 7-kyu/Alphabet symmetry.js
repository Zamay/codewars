// function solve(arr){
//     return arr.map(el => asd(el.toLowerCase()).length);
// };

// function asd(s) {
//     let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     return s.split('').filter((el,i) => i == arr_en.indexOf(el))
// }
/////////////////////
function solve(arr){  
    let alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};

console.log(solve(["abode","ABc","xyzD"]));