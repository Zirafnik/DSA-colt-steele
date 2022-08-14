const binarySearch = require('./binarySearch');

describe('Binary search', () => {
    test('it should equal 16', () => {
        expect(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)).toEqual(16);
    });

    test('it shouldnt find it', () => {
        expect(binarySearch([1,2,3,4,5], 6)).toEqual(-1);
    })
});