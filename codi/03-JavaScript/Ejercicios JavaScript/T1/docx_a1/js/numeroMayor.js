let contador = -1; // Contador de los intentos para llegar a 50
let num1; // Variable para almacenar el número ingresado
do {
  // Pedir al usuario un número
  num1 = Number(prompt("Introduce un número al azar:"));

  while (!num1) {
    //este alert es para cada vez que el usuario se equivoque y ponga algún carácter que no sea un número
    num1 = Number(
      alert(
        "¡pon un numero correcto! empieza desde cero. no se admiten letras ni signos"
      )
    );
    location.reload();
  }
  //esta if es donde vamos a colocar el contador de intentos. "si se introduce algún valor a la variable, se sumará el contador"
  if (num1) contador++;
  //únicamente mientras la variable que ingresemos sea mayor de 50
} while (num1 < 50);
// Mostrar un alert con el resultado cuando el número sea menor que 50
alert(`Has introducido ${contador} veces, números menores de 50.`);
