import { fizzBuzz } from './fizzbuzz.ts';

describe('Given FizzBuzz function', () => {
    describe('When it receives 3', () => {
        test('Then it should return Fizz', () => {
            // Arrange
            const input = 3;
            const expectedOutput = 'Fizz';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });

    describe('When it receives 5', () => {
        test('Then it should return Buzz', () => {
            // Arrange
            const input = 5;
            const expectedOutput = 'Buzz';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });

    describe('When it receives 15', () => {
        test('Then it should return FizzBuzz', () => {
            // Arrange
            const input = 15;
            const expectedOutput = 'FizzBuzz';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });

    describe('When it receives 1', () => {
        test('Then it should return 1', () => {
            // Arrange
            const input = 1;
            const expectedOutput = '1';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });
});
