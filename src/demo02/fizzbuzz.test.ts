import { fizzBuzz, fizzBuzzSerie } from './fizzbuzz.ts';

describe('Given fizzBuzz function', () => {
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

    describe('When it receives 7', () => {
        test('Then it should return 7', () => {
            // Arrange
            const input = 7;
            const expectedOutput = '7';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });

    describe('When it receives 9', () => {
        test('Then it should return Fizz', () => {
            // Arrange
            const input = 9;
            const expectedOutput = 'Fizz';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });

    describe('When it receives 10', () => {
        test('Then it should return Buzz', () => {
            // Arrange
            const input = 10;
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

    describe('When it receives 30', () => {
        test('Then it should return FizzBuzz', () => {
            // Arrange
            const input = 30;
            const expectedOutput = 'FizzBuzz';
            // Act
            const result = fizzBuzz(input);
            // Assert
            expect(result).toBe(expectedOutput);
        });
    });
});

describe('Given fizzBuzzSerie function', () => {
    describe('When it calls with 10', () => {
        test('Then console.log will be call 100 times', () => {
            // Arrange
            const limit = 100;
            vitest.spyOn(console, 'log').mockImplementation(() => {
                //
            });
            // Act
            fizzBuzzSerie(limit);
            // Assert
            expect(console.log).toHaveBeenCalledTimes(limit);
        });
    });
});
