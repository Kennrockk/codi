// Veamos otro tipo  de formas de crear variables.  Variables de tipo constante: const
// Existen pocas diferencias entre let y const, cuando hablamos de datos primitivos: En una variable con const su valor no puede ser reasignado, debe inicializarse con un valor, nunca undefined, suele escribirse en UPPERCASE.

/* const precio; */
const PRECIO = 20;
console.log(PRECIO);

const mo = "Pantalla 19 pulgadas";
console.log(mo);
/* mo = 'Monitor 23 Pulgadas'; no puede reasignarse */
console.log(mo);

// Existen otras diferencias entre const y let especialmente cuando se trabaja con arrays y objetos, osea, con datos complejos.
// Mientras mantengan la estructura del contenido o referencia, pueden sufrir modificaciones en los valores. Recuerda: Las variables con const no se pueden reasignar y tampoco pueden iniciar sin un valor.

/* Ejemplo:

 const nom = function nombre() {
  var nombre = prompt("Introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(`${nombre} es mi nombre`);
  console.log(nombre + "es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.getElementById("mostrar3").innerHTML = `${nombre} es mi nombre`;
} */
