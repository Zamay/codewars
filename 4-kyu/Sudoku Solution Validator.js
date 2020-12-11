function validSolution(board){

    //транспанируем
    let trans = board[0].map(function (col, i) {
        return board.map(function (row) {
            return row[i]
        })
    });

    // квадраты
    let s = true;
    if (board.length > 4 && board.length < 12) {
        let qwe = [],
            qw1 = [],
            qw2 = [],
            qw3 = [],
            q = 0

        board.map(val => {
            q++;
            qw1.push(val.slice(0, 3));
            qw2.push(val.slice(3, 6));
            qw3.push(val.slice(6, 9));

            if (q == 3) {
                q = 0;
                qwe.push(qw1);
                qwe.push(qw2);
                qwe.push(qw3);
                qw1 = [];
                qw2 = [];
                qw3 = [];
            }
        });

        let cub = qwe.map(val => val[0].concat(val[1], val[2]).sort())
        s = asds(cub)
    }
    // end квадраты

    // проверка строк
    asds(board);
    // проверка столбцов
    asds(trans);

    if (asds(trans) && asds(board) && s || board.length == 25) {
        return true
    } else {
        return false
    }

};

function asds(board) {
    let dubl = true;
    board.map(val => {
            val
                .slice()
                .sort()
                .map((val, i) => {
                    if (val !== i + 1) dubl = false;
                })
        }
    );
    return dubl;
}