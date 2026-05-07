// Ejercicio FizzBuzz -> Imprime los números del 1 al 100, pero para múltiplos de 3 imprime "Fizz", para múltiplos de 5 imprime "Buzz" y para múltiplos de ambos imprime "FizzBuzz".

export const fizzBuzz = (n: number): string => {
    const responses: [string, string, string] = ['Fizz', 'Buzz', 'FizzBuzz'];

    if (n === 3) {
        return responses[0];
    } else if (n === 5) {
        return responses[1];
    } else if (n === 3 * 5) {
        return responses[2];
    } else {
        return n.toString();
    }
};
