const { validAnagram1, validAnagram2 } = require('../Ex1_validAnagram');

describe('Ex.1: Valid anagram', () => {
    describe('validAnagram1:', () => {
        test('is valid', () => {
            expect(validAnagram1('', '')).toEqual(true);
        })
        test('is NOT valid', () => {
            expect(validAnagram1('aaz', 'zza')).toEqual(false);
        })
        test('is NOT valid', () => {
            expect(validAnagram1('rat', 'car')).toEqual(false);
        })
        test('is valid', () => {
            expect(validAnagram1('anagram', 'nagaram')).toEqual(true);
        })
    });
    describe('validAnagram2:', () => {
        test('is valid', () => {
            expect(validAnagram2('', '')).toEqual(true);
        })
        test('is NOT valid', () => {
            expect(validAnagram2('aaz', 'zza')).toEqual(false);
        })
        test('is NOT valid', () => {
            expect(validAnagram2('rat', 'car')).toEqual(false);
        })
        test('is valid', () => {
            expect(validAnagram2('anagram', 'nagaram')).toEqual(true);
        })
    });
});