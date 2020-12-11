// Можно ли дать сдачу

function tickets(peopleInLine) {
    let bills = [0, 0, 0];
    for (let i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                bills[0]++;
                break;

            case 50:
                bills[0]--;
                bills[1]++;
                break;

            case 100:
                bills[1] ? bills[1]-- : bills[0] -= 2;
                bills[0]--;
                break;
        }

        if (bills[0] < 0) {
            return 'NO';
        }
    }

    return 'YES';


    // ------------------------
    // Сделано на костылях !!

    // let obj = {
    //         '50': {
    //             name: 50,
    //             count: 0
    //         },
    //         '25': {
    //             name: 25,
    //             count: 0
    //         }
    //     },
    //     i = 0,
    //     arr = peopleInLine,
    //     sum = 0;
    //
    // while(i < arr.length ) {
    //     if (sum === -1) return 'NO';
    //     sum = arr[i];
    //     if (sum === 100) {
    //         sum = sum - obj['50'].name * ( Math.floor(obj['50'].count / 1) > 0 ? 1 : 0 ) === 50 ?
    //             50 : sum - obj['25'].name * ( Math.floor(obj['25'].count / 3) >0 ? 3 : 0 ) === 25 ? 25 : -1;
    //         if (sum === 50) {
    //             obj['50'].count -= 1;
    //         }
    //         if (sum === 25) {
    //             obj['25'].count -= 3;
    //             sum = 24;
    //         }
    //     }
    //
    //     if (sum === 50) {
    //         sum = sum - obj['25'].name * ( Math.floor(obj['25'].count / 1) > 0 ? 1 : 0 ) === 25 ? 25 : -1;
    //         if (sum === 25) {
    //             obj['25'].count -= 1;
    //             sum = 24;
    //         }
    //         if(arr[i] !== 100) {
    //             obj['50'].count += 1;
    //         }
    //
    //     }
    //
    //     if (sum === 25) {
    //         obj['25'].count += 1;
    //     }
    //     i++;
    // }
    //
    // return sum > 0 ? "YES" : "NO"
}
// console.log(tickets([25, 25, 50, 50]));
// console.log(tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100]));
// console.log(tickets([25, 25, 25, 25, 25, 100, 100])); //NO
// console.log(tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100]));
console.log(tickets([25, 25, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 50, 50, 25]));