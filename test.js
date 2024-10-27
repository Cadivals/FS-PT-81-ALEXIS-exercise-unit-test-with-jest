//Import the function sum from the app.js file
const {sum} = require('./app.js');

//Start my first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with two numbers
    let total = sum(14,9);
//We expect the sum of those 2 numbers to be 23
expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function (){
//Import the function from app.js
const {fromEuroToDollar} = require('./app.js');

//Use the function like its supposed to be used
const dollars = fromEuroToDollar(3.5);

//If 1 euros is 1.07, then 3.5 euros should be (3.5 * 1.07)
const expected = 3.5 * 1.07;

//This is the comparison for the unit test
expect(fromEuroToDollar(3.5)).toBe(3.745); //1 euro is 1.07 dollars, then 3.5 should be =(3.5*1.07)
});

test("One dollar should be (156.5 / 1.07) Yen", function (){
    const {fromDollarToYen} = require('./app.js');

const Yen = fromDollarToYen(3.5);

//If 1 euro is 1.07, then 3.5 dollars should be  (3.5 * (156.65/1.07))
const expected =  3.5 * (156.5/1.07);

//This is the comparison for the unit test
expect(fromDollarToYen(3.5)).toBe(3.5 * (156.5/1.07));
});

test("One Yen should be (0.8 / 156.5) Pound", function (){
    const {fromYenToPound} = require ('./app.js');

    const Pound = fromYenToPound(3.5)

    //If 1 euro is 0.87 pound and 156.5 yen then 3.5 yen should be (3.5 * (0.87/156.5) pounds)
    const expected = 3.5 * (0.87/156.5);

    // This is the comparison for the unit test
    expect(fromYenToPound(3.5)).toBe(3.5 * (0.87/156.5));
})