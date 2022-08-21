const findLongestSubstring = require('../Ex9_findLongestSubstring');

describe('Ex.9: Find longest substring', () => {
    test('empty', () => {
        expect(findLongestSubstring('')).toEqual(0);
    })
    test('7', () => {
        expect(findLongestSubstring('rithmschool')).toEqual(7);
    })
    test('6', () => {
        expect(findLongestSubstring('thisisawesome')).toEqual(6);
    })
    test('7', () => {
        expect(findLongestSubstring('thecatinthehat')).toEqual(7);
    })
    test('1', () => {
        expect(findLongestSubstring('bbbbbb')).toEqual(1);
    })
    test('8', () => {
        expect(findLongestSubstring('longestsubstring')).toEqual(8);
    })
});