function squareDigits(num){
    //may the code be with you
    return (num + "").split("").map(n => n*n).join("")
}
console.log(
    squareDigits(9119)
);