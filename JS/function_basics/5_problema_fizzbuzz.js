/**Escribe un programa que tome la entrada del usuario e imprima los números
 *  del uno al número que el usuario ingresó. Sin embargo, para los múltiplos
 *  de tres, imprime Fizzen lugar del número y para los múltiplos de cinco,
 * imprime Buzz. Para los números que son múltiplos tanto de tres como de cinco, imprime FizzBuzz
 */

let numero = parseInt(prompt("Ingrese un numero"));
let contador = 0;
while (contador <= numero) {
  if (contador % 3 === 0 && contador % 5 === 0) {
    console.log("FizzBuzz");
  } else if (contador % 3 === 0) {
    console.log("Fizz");
  } else if (contador % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(contador);
  }

  contador++;
}
console.log(contador);
