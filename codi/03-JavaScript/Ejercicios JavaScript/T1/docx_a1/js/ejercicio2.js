let numero = Number(prompt("Ingresa cualquier número:"));
/* let i = 1;
let result = numero * i;
while (numero > i) {
  let i = numero - 1;
  i--;
}
console.log(`Usando while: ${result}`);
 */
/* let factorialwhile = 1;
let i = 1;
while (i <= numero) {
  factorialwhile *= i;
  i++;
}
console.log(`usando while: ${factorialwhile}`); */

let factorial = 1;
let i = numero;
while (i > 0) {
  factorial *= i;
  i--;
}
console.log(`el factorial de ${numero} es: ${factorial}`);
