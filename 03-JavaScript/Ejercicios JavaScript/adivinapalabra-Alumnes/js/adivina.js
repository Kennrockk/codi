document.addEventListener("DOMContentLoaded", function () {
  // Variables del juego
  let pSecreta = "";
  console.log(pSecreta);
  let pista = "";
  console.log(pista);
  let lIncorrectas = [];
  console.log(lIncorrectas);
  let intentos = 0;
  console.log(intentos);
  let acierto = "";
  let fallo = "";

  // Elementos del DOM
  const inputLetra = document.querySelector(".lletra");
  const cPalabra = document.querySelector(".inputs");
  const cPista = document.querySelector(".pista span");
  const cIntentos = document.querySelector(".restantes span");
  const cErrores = document.querySelector(".letrasErroneas span");
  const cMensaje = document.querySelector(".mostra");
  const cReinicio = document.querySelector(".reset-btn");

  // Iniciar juego
  function empezarJuego() {
    const indice = Math.floor(Math.random() * listado.length);
    pSecreta = listado[indice].palabra;
    console.log(pSecreta);
    pista = listado[indice].pista;
    console.log(pista);
    for (let i = 0; i < pSecreta.length; i++) {
      const Div = document.createElement("div");
      Div.className = "letras";
      cPalabra.appendChild(Div);
    }

    // Reiniciamos las letras incorrectas y los intentos
    lIncorrectas = [];
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

  function comprobarLetra(letra) {
    let acierto = false;

    for (let i = 0; i < pSecreta.length; i++) {
      if (pSecreta[i] === letra) {
        cPalabra.children[i].textContent = letra;
        acierto = true;
      } else {
      }
    }
    if (!acierto) {
      lIncorrectas.push(letra);
      intentos--;
      cErrores.textContent = lIncorrectas;
      cIntentos.textContent = intentos;
    }
  }

  inputLetra.addEventListener("input", function (e) {
    const letra = e.target.value.toLowerCase();
    if (letra.match(/^[a-zñ]$/)) {
      comprobarLetra(letra);
      e.target.value = "";
      console.log((e.target.value = ""));
    }
  });
  empezarJuego();
});
