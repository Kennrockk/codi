let pista = "";
let lIncorrectas = [];
let intentos = 0;
let acierto = Math.floor(Math.random() * msg.length);
let macierto = msg[acierto];
let fallo = Math.floor(Math.random() * msgError.length);
let mfallo = msgError[fallo];

const inputLetra = document.querySelector(".lletra");
const cPalabra = document.querySelector(".inputs");
const cPista = document.querySelector(".pista span");
const cIntentos = document.querySelector(".restantes span");
const cErrores = document.querySelector(".letrasErroneas span");
const cMensaje = document.querySelector(".mostra");
const cReinicio = document.querySelector(".colorbtn");

function empezarJuego() {
  pista = listado[indice].pista;
  for (let i = 0; i < pSecreta.length; i++) {
    const Div = document.createElement("div");
    Div.id = "oscuro";
    Div.className = "letras rounded shadow";
    cPalabra.appendChild(Div);
  }
  if (pSecreta.length > 7) {
    intentos = 8;
  } else {
    intentos = 6;
  }
  cPista.textContent = pista;
  cIntentos.textContent = intentos;
  cErrores.textContent = "";
  cMensaje.textContent = "";
  inputLetra.value = "";
  inputLetra.disabled = false;
}

inputLetra.addEventListener("input", function (e) {
  const letra = e.target.value.toLowerCase();
  if (letra.match(/^[a-zñ]$/)) {
    comprobarLetra(letra);
    e.target.value = "";
  }
});

function comprobarLetra(letra) {
  let acertado = false;
  for (let i = 0; i < pSecreta.length; i++) {
    if (pSecreta[i] === letra) {
      cPalabra.children[i].textContent = letra;
      acertado = true;
    }
  }
  if (!acertado && !lIncorrectas.includes(letra)) {
    lIncorrectas.push(letra);
    if (intentos > 0) intentos--;
    cErrores.textContent = lIncorrectas;
    cIntentos.textContent = intentos;
  }
  if (intentos === 0) {
    cMensaje.innerHTML = `<p class="fallo">${mfallo}</p></br><img src ="img/mono_triste.gif" alt="monito triste :(" title="Monito triste :(" ><img>`;
    inputLetra.disabled = true;
  } else {
    victoria();
  }
}
function victoria() {
  let palabraCompleta = true;
  for (let i = 0; i < pSecreta.length; i++) {
    if (cPalabra.children[i].textContent === "") {
      palabraCompleta = false;
    }
  }
  if (palabraCompleta) {
    cMensaje.innerHTML = `<p class="acierto">${macierto}</p></br><img src ="img/monos_felices.gif" alt="monitos felices :D" title="Monitos felices :D" ><img>`;
    inputLetra.disabled = true;
  }
}

cReinicio.addEventListener("click", () => {
  location.reload();
});

empezarJuego();

function contraste() {
  let bodyContraste = document.querySelector("#contras");
  let mainContraste = document.querySelector("#maincontrast");
  let divContraste = document.querySelectorAll("#oscuro");
  for (let p = 0; p < divContraste.length; p++) {
    divContraste[p].classList.toggle("divoscuro");
  }

  bodyContraste.classList.toggle("oscuro");
  mainContraste.classList.toggle("mainOscuro");
}

const mas = document.querySelector("#font-up");
const menos = document.querySelector("#font-down");

const getFontSize = () =>
  parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--font-size")
  );

mas.addEventListener("click", function () {
  let fontSize = getFontSize();
  menos.disabled = false;
  document.documentElement.style.setProperty(
    "--font-size",
    `${fontSize * 1.1}`
  );
  if (fontSize > 1.75) {
    mas.disabled = true;
  }
  console.log(fontSize);
});

menos.addEventListener("click", function () {
  let fontSize = getFontSize();
  mas.disabled = false;
  document.documentElement.style.setProperty(
    "--font-size",
    `${fontSize * 0.9}`
  );
  if (fontSize <= 1) {
    menos.disabled = true;
  }
  console.log(fontSize);
});
