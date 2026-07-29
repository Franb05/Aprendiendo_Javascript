/**
 * Escribe una función capitalize que reciba una cadena de texto y devuelva esa misma cadena con solo la
 * primera letra en mayúscula. Asegúrate de que pueda aceptar cadenas en minúsculas, mayúsculas o ambas.
 *
 * capitalize("abcd")debería regresar"Abcd"
 * capitalize("ABCD")debería regresar"Abcd"
 * capitalize("aBcD")debería regresar"Abcd"
 */

function capitalize(texto) {
  return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}

console.log(capitalize("abcd")); // Abcd
console.log(capitalize("ABCD")); // Abcd
console.log(capitalize("aBcD")); // Abcd

/*
==========================
MÉTODOS BÁSICOS DE STRINGS
==========================

1. toUpperCase()
- Convierte TODO el string a mayúsculas.
- No modifica el original, devuelve uno nuevo.

Ejemplo:
"hola".toUpperCase()      // "HOLA"


2. toLowerCase()
- Convierte TODO el string a minúsculas.
- No modifica el original.

Ejemplo:
"HOLA".toLowerCase()      // "hola"


3. slice(inicio, fin)
- Extrae una parte del string.
- Si solo recibe "inicio", devuelve desde esa posición hasta el final.
- El índice "fin" no se incluye.

Ejemplos:
"Franco".slice(1)         // "ranco"
"JavaScript".slice(0,4)   // "Java"


4. Índices []
- Permiten acceder a un carácter por su posición.
- La primera posición siempre es 0.

Ejemplo:
"Hola"[0]                 // "H"
"Hola"[2]                 // "l"


Ejemplo completo (capitalize):

texto[0].toUpperCase() + texto.slice(1).toLowerCase()

"fRaNcO"
↓
"F" + "ranco"
↓
"Franco"
*/
