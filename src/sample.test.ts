import { add } from './sample.ts';

describe('Sample test', () => {
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

    test('should add two numbers correctly', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });
});
