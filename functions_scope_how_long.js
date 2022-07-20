let makeUp = [ "cleaner", "tonifier", "cosmetic base", "contour" ]
let prices = [ 30000, 60000, -90000, 120000]

function meeterMeter(makeUp,prices) {
        return makeUp.length + prices.length
}

function searchItem(makeUp, prices) {
        return makeUp.indexOf("contour") + " " + prices.indexOf(60000)
}

function sayItem2(makeUp, prices) {
    return makeUp[0] + " " + (prices[1].toFixed(1))
}

function wordsMix(makeUp, prices) {
    return makeUp.toString().split('').sort()
}

function numOrganizer1(makeUp, prices) {
    return prices.sort().join()
}
function numOrganizer(makeUp, prices) {
    return Math.sign(prices[2])
}

console.log(numOrganizer(makeUp, prices));

/*
[ ]
//Le pongo un ✔ a las lineas que ya hice. Varibles globales declaras y asignadas

'use strict';

✔var makeUp = [ "cleaner", "tonifier", "cosmetic base", "contour" ];
✔var prices = [ 30000, 60000, -90000, 120000];
✔console.log(makeUp.length);
✔console.log(prices.length);
    /!*
✔console.log(makeUp.indexOf("cleaner"));
✔console.log(prices.indexOf(60000));
    /!*
✔es lo mismo decir esto a la linea anterior
✔var result = prices.indexOf(60000);
✔console.log(result);*!/
    /!*
✔console.log(parseInt(makeUp.indexOf("contour")));
✔console.log(prices.indexOf(60000).toFixed(2));

✔console.log(makeUp.toString().split());
✔console.log(typeof(makeUp));
✔console.log(makeUp.toString().slice());
✔console.log(makeUp.toString().split('').sort());

console.log(typeof(makeUp));
console.log(prices.join());

console.log(typeof(prices.join()));
✔console.log(makeUp.toString().split('').sort());
console.log(makeUp.concat('', makeUp));


console.log(prices.join().split());
console.log(prices.join().split(","));
console.log(prices);
console.log(prices.sort());
console.log(makeUp.concat('', prices).sort());

var number = 100;
✔console.log(Math.sign(number));
console.log(Math.sign(prices.indexOf(3)));
*/
