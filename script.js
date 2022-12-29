/* 

1. Write a function that rearranges an integer into its largest possible value.

Example:

123456 --> 654321
105 --> 510
12 --> 21

If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

    *** MY PATH ***

    1.1 Convertir números a String para trabajar mejor con método .toString()
    1.2 Método .split() nos permite separar la cadena de strings
    1.3 Método .sort() nos permite ordenar de mayor a menor la cadena de strings
    1.4 Método .join() para volver a unir la cadena de strings
    1.5 Método parseInt() para devolver todo el resultado en valor númerico que es el tipo de dato de entrada.

    *** MY PATH ***

*/

function superSize(num) {
    return parseInt(num.toString().split('').sort(function (a, b) { return b - a }).join(''))
}

console.log(superSize(348190))
console.log(superSize(802375690123))
