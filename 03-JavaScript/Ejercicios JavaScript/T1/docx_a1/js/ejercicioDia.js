let dia = prompt("Introduce el nombre de un día de la semana");
dia = dia.toUpperCase();
switch (dia) {
  case "LUNES":
    alert(`${dia} es el día 1 de la semana`);
    break;
  case "MARTES":
    alert(`${dia} es el día 2 de la semana`);
    break;
  case "MIERCOLES":
    alert(`${dia} es el día 3 de la semana`);
    break;
  case "JUEVES":
    alert(`${dia} es el día 4 de la semana`);
    break;
  case "VIERNES":
    alert(`${dia} es el día 5 de la semana`);
    break;
  case "SABADO":
    alert(`${dia} es el día 6 de la semana`);
    break;
  case "DOMINGO":
    alert(`${dia} es el día 6 de la semana`);
    break;
  default:
    alert(`"${dia}" No es un día de la semana weon`);
    break;
}
console.log(dia);
