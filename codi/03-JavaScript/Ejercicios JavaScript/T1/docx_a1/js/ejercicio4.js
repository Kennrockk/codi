let num1 = Number(prompt("Ingresa un número del 1 al 10:"));
let num2 = Number(prompt("Ahora, ingresa otro número del 1 al 10:"));
let resultado = (num1 + num2) / 2;
console.log(resultado);
if (num1 <= 10 && num2 <= 10) {
  alert(`${resultado} es la nota media.`);
} else if (num1 > 10 && num2 > 10) {
  alert(
    "Has introducido valores superiores a los solicitados, vuelve a intentarlo"
  );
  location.reload();
}
