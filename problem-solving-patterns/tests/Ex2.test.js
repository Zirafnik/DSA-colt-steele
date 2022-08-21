const countUniqueValues = require('../Ex2_countUniqueValues');

describe('Ex.2: Count unique values', () => {
    // describe('countUniqueValues:', () => {
        test('2 unique values', () => {
            expect(countUniqueValues([1, 1, 1, 1, 2])).toEqual(2);
        })
        test('7 unique values', () => {
            expect(countUniqueValues([1, 1, 2, 3, 4, 7, 7, 7, 8, 11, 11, 11])).toEqual(7);
        })
        test('no values', () => {
            expect(countUniqueValues([])).toEqual(0);
        })
        test('4 unique values', () => {
            expect(countUniqueValues([-4, -1, -1, 0, 1])).toEqual(4);
        })
    // });
});