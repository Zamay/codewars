/**
 * Created by Mitya on 14.09.2017.
 */

// --
function game(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            sum += (j) / (i + j + 1)
        }
    }
    return Math.round(sum)
}

console.log(game(8));