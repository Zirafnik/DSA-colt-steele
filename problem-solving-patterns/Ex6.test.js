const isSubsequence = require('./Ex6_isSubsequence');

describe('Ex.6 Is subequence:', () => {
    test('is subsequence', () => {
        expect(isSubsequence('hello', 'hello world')).toEqual(true);
    })
    test('is subsequence', () => {
        expect(isSubsequence('sing', 'sting')).toEqual(true);
    })
    test('is subsequence', () => {
        expect(isSubsequence('abc', 'abracadabra')).toEqual(true);
    })
    test('is NOT subsequence (order matters)', () => {
        expect(isSubsequence('abc', 'acb')).toEqual(false);
    })
});