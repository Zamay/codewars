//https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/solutions/javascript


function bowlingScore(frames) {
    let rolls = frames.replace(/ /g, '').split(''),
        count = 0,
        score = 0,
        frame;
    for (let i = 0; i < rolls.length; i++) {
        if (rolls[i] === 'X') rolls[i] = 10;
        if (rolls[i] === '/') rolls[i] = 10 - rolls[i - 1];
        else rolls[i] = parseInt(rolls[i]);
    }
    while (count < 10) {
        count++;
        frame = rolls.shift();
        if (frame === 10) score += frame + rolls[0] + rolls[1];        // Strike!!
        else {
            frame += rolls.shift();
            score += frame;
            if (frame === 10) score += rolls[0];                       // Spare!
        }
    }

    console.log(score);
    return score;


    ///////////////////////////////////////////////////////
    // Логика чисто на if ...


    // let arr = frames.split(' '),
    //     i = 0,
    //     sum = 0;
    // for (i; i < arr.length; i++) {
    //     if (i < 9) {
    //         if (arr[i] === 'X'){
    //             sum += 10;
    //             if (arr[i+1] === 'X') {
    //                 sum += 10;
    //                 if (arr[i+2] === 'X' ) {
    //                     sum += 10;
    //                 } else {
    //                     if(arr[i+2] === 'XXX'){
    //                         sum += 10;
    //                     } else {
    //                         sum += parseInt(arr[i+2][0]);
    //                     }
    //                 }
    //             } else {
    //                 if (arr[i+1].length === 3) {
    //                     if (arr[i+1][1] === '/') {
    //                         sum += 10;
    //                     } else if(arr[i+1][0] === 'X' && arr[i+1][1] === 'X') {
    //                         sum += 20;
    //                     } else {
    //                         sum += parseInt(arr[i+1][0] !== 'X' ? arr[i+1][0] : 10) + parseInt(arr[i+1][1]);
    //                     }
    //                 } else {
    //                     if (arr[i+1][1] === '/') {
    //                         sum += 10;
    //                     } else {
    //                         sum += parseInt(arr[i+1][0]) + parseInt((arr[i+1][1]));
    //                     }
    //                 }
    //
    //             }
    //         } else if(arr[i][1] === '/'){
    //             sum += 10 + parseInt(arr[i+1][0] !== 'X' ? arr[i+1][0] : 10);
    //         } else {
    //             sum += parseInt(arr[i][0]) + parseInt(arr[i][1]);
    //         }
    //     } else {
    //         if (arr[i].length === 3) {
    //             if (arr[i][1] === '/') {
    //                 sum += 10 + parseInt(arr[i][2] !== 'X' ? arr[i][2] : 10)
    //             } else if(arr[i][0] === 'X' && arr[i][1] === 'X') {
    //                 sum += 20 + parseInt(arr[i][2] !== 'X' ? arr[i][2] : 10)
    //             }
    //         } else {
    //             if (arr[i][1] === '/') {
    //                 sum += 10;
    //             } else {
    //                 sum += parseInt(arr[i][0]) + parseInt((arr[i][1]));
    //             }
    //         }
    //     }
    // }
    //
    // console.log(sum);
}

// bowlingScore('X X 9/ 80 X X 90 8/ 7/ 44');
// bowlingScore('11 11 11 11 11 11 11 11 11 11');
// bowlingScore('X X X X X X X X X XXX');
// bowlingScore('5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2');
// bowlingScore('5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 8/8')
bowlingScore('X X 9/ 80 X X 90 8/ 7/ 44'); //171
bowlingScore('00 00 00 00 00 00 00 00 X 0/X'); //40
bowlingScore('61 22 3/ 42 15 X 32 9/ X 1/X'); //117