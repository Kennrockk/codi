document.addEventListener("DOMContentLoaded", function () {
  let pista = "";
  let lIncorrectas = [];
  console.log(lIncorrectas);
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
  const cReinicio = document.querySelector(".reset-btn");

  function empezarJuego() {
    pista = listado[indice].pista;
    for (let i = 0; i < pSecreta.length; i++) {
      const Div = document.createElement("div");
      Div.className = "letras";
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
  empezarJuego();
  inputLetra.addEventListener("input", function (e) {
    const letra = e.target.value.toLowerCase();
    console.log(letra);
    if (letra.match(/^[a-zñ]$/)) {
      comprobarLetra(letra);
      e.target.value = "";
    }
  });
  let acertado = false;

  function comprobarLetra(letra) {
    for (let i = 0; i < pSecreta.length; i++) {
      if (pSecreta[i] === letra) {
        cPalabra.children[i].textContent = letra;
        acertado = true;
      }
    }
    if (!acertado && !lIncorrectas.includes(letra)) {
      console.log(lIncorrectas.includes(letra));
      lIncorrectas.push(letra);
      intentos--;
      cErrores.textContent = lIncorrectas;
      cIntentos.textContent = intentos;
    }
    if (intentos === 0) {
      cMensaje.innerHTML = mfallo;
      return;
    }
  }
});
