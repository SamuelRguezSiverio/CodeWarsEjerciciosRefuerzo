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

/*

3. Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

    *** MY PATH ***

    3.1 Convertir el parámetro n en string usando .toString().
    3.2 Utilizar método .length del parámetor n para determinar cuantos dígitos tiene.
    3.3 Devolver el resultado en formato número usando parseInt()
    3.4 Englobar todo en un condicional if para que n sea mayor o igual que 0 y se cumpla la función según la indicación del ejercicio.

    *** MY PATH ***

*/

function digits(n) {
    if (n >= 0) {
        return parseInt(n.toString().length)
    }
} 

console.log(digits(5))
console.log(digits(12354))
console.log(digits(9346561233))

/*

4. Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

    "a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent."

You may assume the input is always valid.

Examples:

    isPowerOfTwo(1024) // -> true
    isPowerOfTwo(4096) // -> true
    isPowerOfTwo(333)  // -> false

Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

    *** MY PATH ***

    4.1 Accediendo a este link https://oeis.org/A000079 comprobamos cuales son los valores de Power of 2:

        Powers of 2: a(n) = 2^n.
        
        1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592
    4.2 Generamos una condición en la que ya sabemos que si el valor de "n" es 0 el resultado es falso.
    4.3 Utilizamos un bucle while() para determinar que todas las operaciones resultantes de hayar el cociente de 2 y cuyo resultado sea igual a 0 sean posibles para determinar que el valor sea true.

    *** MY PATH ***

*/

function isPowerOfTwo(n) {
    if (n === 0) {
        return false
    }
    while (n % 2 === 0) {
        n = n / 2
    }
    return n === 1
}

console.log(isPowerOfTwo(0))
console.log(isPowerOfTwo(1024))
console.log(isPowerOfTwo(333))

/*

5. All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

    *** MY PATH ***

    5.1 Siguiendo la regla del ejercicio identificamos en un string como extraer la primera y última letra de todo su contenido.
    5.2 Para identificar la primera letra usamos string[0] y para la última string.length -1
    5.3 Realizamos un condicional if() para igualar las iniciales del nombre de cada animal junto con las últimas letras de sus respectivos platos de comida.
    5.4 Si ocurre la condición, regresamos true
    5.5 Si no ocurre, entonces false.

    *** MY PATH ***

*/

function feast(beast, dish) {
    if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
      return true
    }
    else {
      return false
    }
  }

console.log(feast('Great Blue Heron', 'Garlic Naan'))
console.log(feast('Chickadee', 'Chocolate Cake'))

/*

6. Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

    *** MY PATH ***

    6.1 Identificamos el primer caracter del string utilizando el método charAt(0) donde index = 0 y le pasamos el método .toUpperCase() para devolver el resultado en mayúscula.
    6.2 Añadimos el método .slice(1) para sumar al primer caracter la continuación del resto del string, por eso usamos index = 1, para que obvie el primer caracter y siga la secuencia de lo escrito.

    *** MY PATH ***

*/

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  console.log(capitalizeWord('hello world!'))

  