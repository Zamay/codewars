function isvaild(i, j, puzzle, num)
{
    for (let k = 0; k < puzzle[i].length; k++)
    {
        if (puzzle[i][k] === num)
            return false;
    }
    for (let k = 0; k < puzzle.length; k++)
    {
        if (puzzle[k][j] === num)
            return false;
    }
    let ii = Math.floor(i / 3), jj = Math.floor(j / 3);
    for (let k = 3*ii; k < 3*ii + 3; k++)
    {
        for (let l = 3*jj; l < 3*jj + 3; l++)
        {
            if (puzzle[k][l] === num)
                return false;
        }
    }
    return true;
}

function sudoku(puzzle) {
    let flag = 0;
    function dfs(puzzle, index)
    {
        if (index > 80)
        {
            flag = 1;
            return;
        }
        let i = Math.floor(index / 9), j = index % 9;
        if (puzzle[i][j] !== 0)
            return dfs(puzzle, index + 1);
        for (let v = 1; v <= 9; v++)
        {
            if (isvaild(i, j, puzzle, v))
            {
                puzzle[i][j] = v;
                dfs(puzzle, index + 1);
            }
        }
        if (flag === 0)
            puzzle[i][j] = 0;
    }
    dfs(puzzle, 0);
    return puzzle
}

let puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];


console.log(sudoku(puzzle));

//https://www.codewars.com/kata/5296bc77afba8baa690002d7/solutions/javascript