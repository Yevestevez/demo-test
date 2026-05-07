// Ejercicio FizzBuzz -> Imprime los números del 1 al 100, pero para múltiplos de 3 imprime "Fizz", para múltiplos de 5 imprime "Buzz" y para múltiplos de ambos imprime "FizzBuzz". Si no son múltiplos de 3 ni de 5 debe devolver el número introducido en string

export const fizzBuzz = (n: number): string => {
    const responses: [string, string, string] = ['Fizz', 'Buzz', 'FizzBuzz'];

    if (n % 3 === 0 && n % 5 === 0) {
        return responses[2];
    } else if (n % 3 === 0) {
        return responses[0];
    } else if (n % 5 === 0) {
        return responses[1];
    } else {
        return n.toString();
    }
};
