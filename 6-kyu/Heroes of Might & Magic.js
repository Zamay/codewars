//Heroes of Might & Magic II: One-on-One

function whoWouldWin(mon1, mon2) {
    let mon11 = Object.assign({}, mon1),
        mon22 = Object.assign({}, mon2);
    const hitPoint1 = mon11['hitpoints'],
          hitPoint2 = mon22['hitpoints'];

    let allHitPoint = function (hitPoint, obj) {
        const hitpoints = hitPoint;
            h = obj.hitpoints,
            n = obj.number,
            d = obj.damage;
        if (n > 1) {
            return ( hitpoints * (n - 1) + h );
        }
        return h;
    };

    let WhyWon = function foo(obj1, obj2) {
        let mon11 = obj1,
            mon22 = obj2;

        if (mon11['number'] < 1 ) {
            return  `${mon22['number']} ${mon22['type']}(s) won`
        }

        mon22['AllHelp'] = allHitPoint(hitPoint2, mon22) - mon11['number'] * mon11['damage'];
        mon22['hitpoints'] = mon22['AllHelp'] % hitPoint2 == 0 ? hitPoint2 : mon22['AllHelp'] % hitPoint2;
        mon22['number'] =  Math.ceil(mon22['AllHelp'] / hitPoint2);

        if (mon22['number'] < 1 ) {
            return  `${mon11['number']} ${mon11['type']}(s) won`
        }

        mon11['AllHelp'] = allHitPoint(hitPoint1, mon11) - mon22['number'] * mon22['damage'];
        mon11['hitpoints'] = mon11['AllHelp'] % hitPoint1 == 0 ? hitPoint1 : mon11['AllHelp'] % hitPoint1;
        mon11['number'] =  Math.ceil(mon11['AllHelp'] / hitPoint1);

        return foo(mon11 , mon22);
    };

    return WhyWon(mon11, mon22);

}

let pairs = [
    [{ type: 'Bone Dragon', hitpoints: 150, number: 5, damage: 45 },
        { type: 'Cyclops', hitpoints: 80, number: 11, damage: 24 }],
    [{ type: 'Ogre Lord', hitpoints: 60, number: 20, damage: 7 },
        { type: 'Rogue', hitpoints: 4, number: 100, damage: 2 }],
    [{ type: 'Boar', hitpoints: 15, damage: 3, number: 5 },
        { type: 'Titan', hitpoints: 300, damage: 30, number: 3 }]
];

console.log(whoWouldWin(pairs[0][0], pairs[0][1]));