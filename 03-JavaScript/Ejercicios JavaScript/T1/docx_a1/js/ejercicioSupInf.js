let num1 = prompt("Introduce el primer número");
let num2 = prompt("Ahora introduce el segundo número");
num1 = Number(num1);
console.log(typeof num1);
num2 = Number(num2);
console.log(typeof num2);

if (num1 > num2) {
  alert(`${num1} Es un número mayor y ${num2} es un número menor.`);
} else if (num1 < num2) {
  alert(`${num2} Es un número mayor y ${num1} es un número menor.`);
} else if (num1 == num2) {
  alert(`${num1} Es igual que ${num2}.`);
} else {
  alert("Sorry krnal, así no jala");
}

let salirono = confirm("¿Volver a cargar el juego?");
if (salirono) {
  location.reload();
} else {
  salir();
}
