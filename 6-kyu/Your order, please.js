function order(words){
    return words.split(" ")
        .reduce( (arr, el) => {
            arr[parseInt(el.match(/\d+/))] = el;
            return arr;
        }  , [])
        .join(" ")
}


console.log(order("is2 Thi1s T4est 3a"));