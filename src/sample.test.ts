import { describe, expect, test } from 'vitest';
import { add } from './sample.ts';

describe('Sample test', () => {
    test('should add two numbers correctly', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });
});
