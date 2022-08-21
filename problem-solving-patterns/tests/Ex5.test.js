const averagePair = require('../Ex5_averagePair');

describe('Ex.5: Average pair', () => {
    test('contains pair', () => {
        expect(averagePair([1,2,3],2.5)).toEqual(true);
    })
    test('contains pair', () => {
        expect(averagePair([1,3,3,5,6,7,10,12,19],8)).toEqual(true);
    })
    test('does not contain pair', () => {
        expect(averagePair([-1,0,3,4,5,6], 4.1)).toEqual(false);
    })
    test('does not contain pair', () => {
        expect(averagePair([],4)).toEqual(false);
    })
});