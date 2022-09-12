function cakes(recipe, available) {
  // let numberCakes = []
  // for (item in recipe) {
  //   numberCakes.push(Math.floor(available[item] / recipe[item]) || 0);
  // }
  //
  // return Math.min(...numberCakes);

  // 2
  // return Object.keys(recipe).reduce((acc, el) => {
  //   return Math.min(Math.floor(available[el] / recipe[el] || 0), acc)
  // }, Infinity);

  // 3
  return Math.min(...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0)))
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200,  eggs: 1}));
