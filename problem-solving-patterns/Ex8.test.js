const minSubArrayLen = require('./Ex8_minSubArrayLen');

describe('Ex.8 Min sub-array length:', () => {
    test('2 -> because [4,3] is the smallest subarray', () => {
        expect(minSubArrayLen([2,3,1,2,4,3], 7)).toEqual(2);
    })
    test('2 -> because [5,4] is the smallest subarray', () => {
        expect(minSubArrayLen([2,1,6,5,4], 9)).toEqual(2);
    })
    test('1 -> because [62] is greater than 52', () => {
        expect(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)).toEqual(1);
    })
    test('3', () => {
        expect(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)).toEqual(3);
    })
    test('0', () => {
        expect(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)).toEqual(0);
    })
});