// function maskify(cc) {
//     let s = cc.replace(/\s/g, '').length;

//     return  ( s < 4) ? cc : cc.trim().slice(-4).padStart(s, "#");
// }
 
  console.log( maskify('4556 364607 9356 16 ') );
  console.log( maskify('dsd asdas asdsaas d s sadsds ds ') );
  console.log( maskify('1') );
// console.log("1");



///////////////////////////////////////
// return masked string
function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}


// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
//   }


// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   }