const btnred = document.querySelector("#red");
const btngreen = document.querySelector("#green");

btnred.onclick = () => {
  document.body.style.backgroundColor = "red";
  alert("Cambiamos color de fondo a ROJO");
};

btngreen.onclick = () => {
  document.body.style.backgroundColor = "green";
  alert("Cambiamos color de fondo a VERDE");
};
