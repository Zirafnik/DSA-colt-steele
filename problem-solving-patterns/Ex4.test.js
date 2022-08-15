const { areThereDuplicates1, areThereDuplicates2 } = require('./Ex4_areThereDuplicates');

describe('Ex.4: Are there duplicates', () => {
    describe('areThereDuplicates1', () => {
        test('no duplicates', () => {
            expect(areThereDuplicates1(1, 2, 3)).toEqual(false);
        })
        test('duplicates', () => {
            expect(areThereDuplicates1(1, 2, 2)).toEqual(true);
        })
        test('duplicates letters', () => {
            expect(areThereDuplicates1('a', 'b', 'c', 'a')).toEqual(true);
        })
    });
    describe('areThereDuplicates2', () => {
        test('no duplicates', () => {
            expect(areThereDuplicates2(1, 2, 3)).toEqual(false);
        })
        test('duplicates', () => {
            expect(areThereDuplicates2(1, 2, 2)).toEqual(true);
        })
        test('duplicates letters', () => {
            expect(areThereDuplicates2('a', 'b', 'c', 'a')).toEqual(true);
        })
    });
})