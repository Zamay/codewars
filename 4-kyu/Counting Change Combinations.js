// https://www.codewars.com/kata/541af676b589989aed0009e7/solutions/javascript

let countChange = function(money, coins) {
    if(money < 0 || coins.length === 0)
        return 0;
    else if(money === 0)
        return 1;
    else
        return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))

    //////////////////////////////////////////////////////////////
    // coins = coins.sort((a,b) => a-b);
    // let res = 0;
    // function dfs(money, arrCoins, start) {
    //     if (money === 0) {
    //         res += 1;
    //         return;
    //     }
    //     for (let i = start; i < arrCoins.length; i++) {
    //         if (arrCoins[i] <= money) {
    //             dfs(money-arrCoins[i], arrCoins, i);
    //         }
    //     }
    //
    // }
    // dfs(money, coins, 0);
    // return res;
};

countChange(4, [1,2]); // => 3
countChange(10, [5,2,3]); // => 4 | 5+5, 5+2+3, 2+2+3+3,
countChange(11, [5,7]); //  => 0
