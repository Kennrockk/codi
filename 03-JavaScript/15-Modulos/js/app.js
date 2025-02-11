console.log(nombreCliente);
console.log(nombreCliente, ahorro);
// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas, es voluminoso o ambiém si decidimos implementar librerias...
// La solución es agrupar cada archivo en lo que se conoce como un IIFE (Immediately Invoked Function Expression).
// 2) Para mejorar esta forma de uso con las IIFE, usaremos módulos, que nos permite importar y exportar parte del código entre archivos js según nuestras necesidades: ejemplo de importación desde el archivo cliente.js
//Hay que ponerle el type module a los script en el html para que esto funcione
/* import { nombreCliente } from "./cliente.js"; //Importamos y usamos la constante nombreCliente
console.log(nombreCliente);

import { ahorro } from "./cliente.js"; //Añadimos el uso de la let ahorro
console.log(nombreCliente, ahorro); */

/* import { mostrarDatos, ahorro, nombreCliente } from "./cliente.js";
const cliente = mostrarDatos(nombreCliente, ahorro); // Incluimos una función
console.log(cliente); */
import { nombreCliente, ahorro, Cliente } from "./cliente.js";
const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.nombre);
console.log(cliente.ahorro);
console.log(cliente.mostrarDatos());
