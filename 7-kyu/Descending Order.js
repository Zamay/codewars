function descendingOrder(n){
    let arr = n.toString()
        .split('')
        .sort( (a,b) => b - a)
        .join('');
    console.log(arr);
}
descendingOrder(21445);