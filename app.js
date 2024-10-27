// This is my function that sums two numers
const sum = (a, b) => {
    return a + b
}

// Just a console for ourselves
console.log(sum(7, 3));

// One euro is:

let OneEuroIs= {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    //Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    //return dollar value
    return valueInDollar;
}

console.log("Euro to Dollar: ",fromEuroToDollar(1));

const fromDollarToYen = function (valueInDollar) {
    //Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar*(156.5/1.07);
    //return Yen value
    return valueInYen;
} 

console.log("Dollar to Yen: ",fromDollarToYen(1))

const fromYenToPound= function (valueInYen) {
    //convert the given valueInYen to Pound
    valueInPound = valueInYen*(0.87/156.5)
    //return 
    return valueInPound;
}

console.log("Yen to Pound :", fromYenToPound(1))
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};