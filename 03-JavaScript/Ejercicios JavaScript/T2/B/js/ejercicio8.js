/* let ntitulo = prompt("introduce un nuevo título:");
document.title = `${ntitulo}`; */

document.querySelector("#principal").style.backgroundColor = "gray";
document.querySelector("#principal").style.color = "green";

function activar() {
  const ancho = screen.width;
  const alto = screen.height;
  const anchout = window.innerWidth;
  const alturaut = window.innerHeight;
  let diagonal = Math.sqrt(Math.pow(ancho, 2) + Math.pow(alto, 2));
  let tab = `
  <table class="table .table-striped w-25 p-3">
    <tr>
      <td id="cont1">Ancho de pantalla</td>
      <td id="res1">${ancho}</td>
    </tr>
    <tr>
      <td id="cont2">Altura de la pantalla</td>
      <td id="res2">${alto}</td>
    </tr>
    <tr>
      <td id="cont3">Ancho útil</td>
      <td id="res3">${anchout}</td>
    </tr>
    <tr>
      <td id="cont4">Altura útil</td>
      <td id="res4">${alturaut}</td>
    </tr>
    <tr>
      <td id="cont5">Diagonal de la pantalla en píxeles</td>
      <td id="res5">${diagonal}</td>
    </tr>
  </table>`;

  document.querySelector("#tabla").innerHTML = tab;
}
let newventana;
function abrirp() {
  newventana = window.open(
    "C:UsersAlumne_tarda1DocumentsApp24codicodi\x03-JavaScriptEjercicios JavaScriptT2B\nuevap.html",
    "_blank",
    `location=no, menubar=no, titlebar=no, resizable=no, toolbar=no, menubar=no, width=200px, height=500px`
  );
}
function cerrarp() {
  newventana.close();
}

function boton() {
  const texto = document.getElementById("nom").value;
  const valor = texto.substr(-5, 5);
  if (texto.length > 10) {
    document.querySelector("#result").innerHTML = valor;
  }
}
