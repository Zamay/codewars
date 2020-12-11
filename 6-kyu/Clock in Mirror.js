
function WhatIsTheTime(t)
{
    t = t.split(':')
    t[0] = parseInt(t[0]);
    t[1] = parseInt(t[1]);
    if (t[0] == 12)
        t[0] = 0;
    if (t[1] == 0)
    {
        t[1] = 60;
        t[0] -= 1;
    }
    res = [(11 - t[0]).toString(), (60 - t[1]).toString()];
    if (res[0] == '0')
        res[0] = '12';
    if (res[0].length == 1)
        res[0] = '0' + res[0];
    if (res[1].length == 1)
        res[1] = '0' + res[1];
    return res.join(':');
}


// ------------------------
let WhatIsTheTime = t => {
    let [h, m] = t.split(':');
    h = (+m ? 11 : 12) - h % 12 || 12;
    m = (60 - m) % 60;
    return [h, m].map(e => e > 9 ? e : '0' + e).join(':');
};

console.log(
    WhatIsTheTime('11:00')
);