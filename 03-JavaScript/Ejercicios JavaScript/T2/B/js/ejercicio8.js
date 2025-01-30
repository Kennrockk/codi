/* let ntitulo = prompt("introduce un nuevo título:");
document.title = `${ntitulo}`; */

document.querySelector("#principal").style.backgroundColor = "gray";
document.querySelector("#principal").style.color = "white";

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
    document.querySelector("#result0").innerHTML = valor;
  }
}

caracteres = () => {
  const texto = document.getElementById("frase").value;
  document.querySelector("#result1").innerHTML = texto.length;
};

function cursiva() {
  const texto = document.getElementById("frase").value;
  document.querySelector("#result2").innerHTML = `<i>${texto}</i>`;
}

function negrita() {
  const texto = document.getElementById("frase").value;
  document.querySelector("#result3").innerHTML = `<strong>${texto}</strong>`;
}

function rojo() {
  const texto = document.getElementById("frase").value;
  document.querySelector(
    "#result4"
  ).innerHTML = `<p style="color: red">${texto}</p>`;
}

function grande() {
  const texto = document.getElementById("frase").value;
  document.querySelector(
    "#result5"
  ).innerHTML = `<p style="font-size: 35px">${texto}</p>`;
}
let boton1 = document.querySelector("#btnn");
boton1.addEventListener("click", function () {
  const texto = document.getElementById("frase").value;
  const resultado = texto
    .replace(/a/g, "á")
    .replace(/A/g, "Á")
    .replace(/e/g, "é")
    .replace(/E/g, "É")
    .replace(/i/g, "í")
    .replace(/I/g, "Í")
    .replace(/o/g, "ó")
    .replace(/O/g, "Ó")
    .replace(/u/g, "ú")
    .replace(/U/g, "Ú");
  document.querySelector("#result6").innerHTML = resultado;
});

function tabla2() {
  let ta = `<table class ="tb">  
    <tbody>
      <tr>
        <td contenteditable>HOLA</td>
        <td contenteditable>ADIOS</td>
      </tr>
      <tr>
        <td contenteditable>BUENOS DIAS</td>
        <td contenteditable>BUENAS NOCHES</td>
      </tr>
    </tbody>
  </table>`;
  document.querySelector("#t").innerHTML = ta;
}

function area() {
  const base = document.getElementById("base").value;
  const altura = document.getElementById("altura").value;
  const area = (base * altura) / 2;
  document.querySelector(
    "#result7"
  ).innerHTML = `El área del triangulo es base(${base}) multiplado por altura(${altura}) y el resultado dividido por 2, lo que nos da como resultado = ${area}`;
}
