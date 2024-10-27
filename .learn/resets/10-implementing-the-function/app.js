// This is my function that sums two numers
// const sum = (a, b) => {
//     return a + b
// }

// Just a console for ourselves
// console.log(sum(7, 3));

// One euro is:

// let OneEuroIs= {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }

const fromEuroToDollar = function(valueInEuro){
    //Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    //return dollar value
    return valueInDollar;
}


module.exports = {sum, fromEuroToDollar};