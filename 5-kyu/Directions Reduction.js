let comp = {"NORTH": "SOUTH", "WEST": "EAST", "SOUTH": "NORTH", "EAST": "WEST"};
function dirReduc(arr){
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (stack.length > 0 && comp[arr[i]] === stack[stack.length-1])
            stack.pop();
        else
            stack.push(arr[i]);
    }
    return stack;  

    // 2e решение
    // const cardinalPoints = {
    //     NORTH : "SOUTH",
    //     SOUTH : "NORTH",
    //     WEST : "EAST",
    //     EAST : "WEST"
    // }
    //
    // return arr.reduce((acc, el) => {
    //     if (acc[acc.length - 1] === cardinalPoints[el])
    //         acc.pop()
    //     else
    //         acc.push(el)
    //
    //     return acc
}

console.log(
    dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

