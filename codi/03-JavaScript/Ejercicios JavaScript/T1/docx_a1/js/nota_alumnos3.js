let nota = prompt("Introduce tu nota en la evaluación");
nota = Number(nota.replace(/,/, "."));
if (nota < 5) {
  alert("suspendido");
} else if (nota < 6) {
  alert("Aprobado");
} else if (nota < 7) {
  alert("Bien");
} else if (nota < 9) {
  alert("Notable");
} else if (nota <= 10) {
  alert("Excelente");
}
while (!nota) {
  nota = Number(
    alert("¡pon un numero correcto! No se admiten letras ni signos.")
  );
  location.reload();
}
