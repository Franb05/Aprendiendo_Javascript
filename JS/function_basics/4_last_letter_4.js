/*
 *Escribe una función lastLetter que reciba una cadena de texto y devuelva la última letra de esa cadena:
 *lastLetter("abcd")debería regresar"d"
 */

function lastLetter(texto) {
  return texto[texto.length - 1];
}

console.log(lastLetter("ABCD")); // D
console.log(lastLetter("inicio")); // o
/*
length:
- Devuelve la cantidad de caracteres de un string.
- Es una propiedad, no un método.

Ejemplo:
"Hola".length      // 4

Índices:
H o l a
0 1 2 3

La última posición siempre es:
texto.length - 1

Obtener la última letra:
texto[texto.length - 1]
*/
