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


/*

2. Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language).

    *** MY PATH ***

    2.1 Tenemos que determinar que parámetro es mayor que el otro para utilizarlo en tal caso como dividendo o divisor.
    2.2 Establecer condición "Si n es mayor que m entonces usa n como dividendo y m como divisor" para ello usamos el operador "%"
    2.3 Cerrar la condición con "else" para retornar el resultado que determina el caso contrario usando n como divisor y m como dividendo.

    *** MY PATH ***

*/

function remainder(n, m) {
    if (n > m) {
        return n % m
    } else {
        return m % n
    }
}

console.log(remainder(17, 5))
console.log(remainder(13, 72))
console.log(remainder(0, -1))
console.log(remainder(0, 1))