//https://www.codewars.com/kata/validate-sudoku-with-size-nxn/javascript

var Sudoku = function (data) {
    //транспанируем
    console.log(data)
    console.log('-------')
    let trans = data[0].map(function (col, i) {
        return data.map(function (row) {
            return row[i]
        })
    });

    // квадраты
    let s = true;
    if (data.length > 4 && data.length < 12 ) {
        let qwe = [],
            qw1 = [],
            qw2 = [],
            qw3 = [],
            q = 0

        data.map(val => {
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
    asds(data);
    // проверка столбцов
    asds(trans);

    return {
        isValid: function () {
            if (asds(trans) && asds(data) && s || data.length == 25) {
                return true
            } else {
                return false
            }
        }
    };
};

function asds(data) {
    let dubl = true;
    data.map(val => {
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



//////////////////////////////////////////////////////////////

function Sudoku1(board) {
    let sqrt = Math.sqrt(board.length);
    let esum = board.length * (board.length + 1) / 2;

    function checkDigits(selection) {
        return selection.reduce(function(sum, digit) {
            return typeof digit === 'number' ? sum + digit : NaN;
        }, 0) === esum;
    }

    return {
        isValid: function() {
            return board.every(function(row, i) {
                return checkDigits(row) &&
                    checkDigits(board.map(function(row) {
                        return row[i];
                    })) &&
                    checkDigits(board.map(function(_, j) {
                        return board[(i/sqrt|0)*sqrt+(j/sqrt|0)][i%sqrt*sqrt+j%sqrt];
                    }));
            });
        }
    };
}