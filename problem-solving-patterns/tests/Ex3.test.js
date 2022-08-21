const sameFrequency = require('../Ex3_sameFrequency');

describe('Ex.3: Same frequency', () => {
    test('same digits', () => {
        expect(sameFrequency(182,281)).toEqual(true);
    })
    test('different digits', () => {
        expect(sameFrequency(34,14)).toEqual(false);
    })
    test('same digits', () => {
        expect(sameFrequency(3589578, 5879385)).toEqual(true);
    })
    test('different digits', () => {
        expect(sameFrequency(22,222)).toEqual(false);
    })
});