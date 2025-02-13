let fijar = document.querySelector("#fijar");

fijar.innerHTML = `<p>Muy buenas, ingresa tu nombre para empezar:</p><input class="" id="nombre" type="text"><small id="mostra1" style="color: red"></small><button id="btn-nombre" type="submit">Enviar</button>`;
let boton1 = document.querySelector("#btn-nombre");

let recogerNombre;
let recoger10;
let recogermayor;
let recogerAleatorio;
let numAleatorio;
console.log(recoger10);

boton1.addEventListener("click", function () {
  recogerNombre = document.querySelector("#nombre").value;
  const m = document.querySelector("#mostra1");

  if (Number(recogerNombre) || recogerNombre == "") {
    m.innerHTML = "Introduce un nombre válido";
  } else {
    fijar.innerHTML = "";
    num10();
  }
});

function num10() {
  fijar.innerHTML = `<p>¿Hola ${recogerNombre}! A continuación escribe un número del 1 al 10 para crear tu número menor del rango:</p> </br> <input id="numero10" type="text"> <small id="mostra1" style="color: red"></small> <button id="btn-10" type="submit">Enviar</button>`;
  let boton10 = document.querySelector("#btn-10");

  boton10.addEventListener("click", function () {
    recoger10 = document.querySelector("#numero10").value;
    const m = document.querySelector("#mostra1");

    if (
      isNaN(recoger10) ||
      recoger10 == "" ||
      recoger10 < 1 ||
      recoger10 > 10
    ) {
      m.innerHTML = "Introduce un número válido";
    } else {
      fijar.innerHTML = "";
      nummayor();
    }
  });
}

function nummayor() {
  fijar.innerHTML = `<p>${recogerNombre}, has elegido el ${recoger10}, A continuación Introduce un número entre 30 y 40 para crear tu número mayor del rango:</p> </br> <input id="numeromayor" type="text"> <small id="mostra1" style="color: red"></small> <button id="btn-mayor" type="submit">Enviar</button>`;
  let btnmayor = document.querySelector("#btn-mayor");

  btnmayor.addEventListener("click", function () {
    recogermayor = document.querySelector("#numeromayor").value;
    const m = document.querySelector("#mostra1");

    if (
      isNaN(recogermayor) ||
      recogermayor == "" ||
      recogermayor < 30 ||
      recogermayor > 40
    ) {
      m.innerHTML = "Introduce un número válido";
    } else {
      fijar.innerHTML = "";
      aleatorio();
    }
  });
}

function aleatorio() {
  recoger10 = Number(recoger10);
  recogermayor = Number(recogermayor);
  numAleatorio =
    Math.floor(Math.random() * (recogermayor + 1 - recoger10)) + recoger10;
  alert(`${numAleatorio}`);
  let contador = 0;

  fijar.innerHTML = `<p>${recogerNombre}\nIntroduce tú número para adininar pensado por mi, dispones de 5 intentos, recuerda que ha de ser entre ${recoger10} y ${recogermayor}.</br> Intento: ${contador}</p>  <input id="numeroaleatorio" type="text"> <small id="mostra1" style="color: red"></small> <button id="btn-aleatorio" type="submit">Enviar</button>`;
  let btaleatorio = document.querySelector("#btn-aleatorio");

  btaleatorio.addEventListener("click", function () {
    recogerAleatorio = document.querySelector("#numeroaleatorio").value;
    const m = document.querySelector("#mostra1");
    contador = 0;

    if (recogerAleatorio < numAleatorio) {
      m.innerHTML = "Tú número es menor que  el pensado";
      contador = false;
    }
    if (recogerAleatorio > numAleatorio) {
      m.innerHTML = "Tú número es mayor que  el pensado";
      contador = false;
    }
    if (isNaN(recogerAleatorio) || recogerAleatorio == "") {
      m.innerHTML = "Introduce un número válido";
    }
    if (recogerAleatorio < recoger10 || recogerAleatorio > recogermayor) {
      m.innerHTML = `Has introducido un numero fuera del rango permitido, por favor ingresa un numero entre el ${recoger10} y el ${recogermayor}`;
    }
    if (recogerAleatorio == numAleatorio) {
      fijar.innerHTML = "";
      victoria();
    }
  });
}

function victoria() {
  fijar.innerHTML = `<p>¡${recogerNombre}, has ganado el juego! deseas volver a iniciar el juego?</p> <button id="btn-reiniciar" type="submit">Si</button> <button id="btn-borrar" type="submit">Si, pero quiero cambiar el nombre</button>`;
  let btnReiniciar = document.querySelector("#btn-reiniciar");
  let btnBorrar = document.querySelector("#btn-borrar");

  btnReiniciar.addEventListener("click", function () {
    fijar.innerHTML = "";
    num10();
  });
  btnBorrar.addEventListener("click", function () {
    location.reload();
  });
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
