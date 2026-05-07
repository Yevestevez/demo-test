import { add } from './sample.ts';

describe('Given add function', () => {
    beforeAll(() => {
        //
    });

    afterAll(() => {
        //
    });

    beforeEach(() => {
        //
    });

    afterEach(() => {
        //
    });

    describe('When we add 2 and 3', () => {
        test('Then the result should be 5', () => {
            const result = add(2, 3);
            expect(result).toBe(5);
        });
    });
});
