const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
let cajadatos = document.querySelector("#cajadatos");

const eliminar = (clave) => {
  if (confirm("¿Estás seguro?")) {
    localStorage.removeItem(clave);
    mostrar();
  }
};

const eliminarTodo = () => {
  if (confirm("¿Seguro?")) {
    localStorage.clear();
    cajadatos.innerHTML = "";
    mostrar();
  }
};

const mostrar = () => {
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
  for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <input type="button" onclick="eliminar('${clave}')" value="Eliminar"</div>`;
  }
};

const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = val.value;

    localStorage.setItem(clave, valor);

    indice.value = "";
    val.value = "";
    mostrar();
  });
};

addEventListener("load", iniciar);

/* seran 30 preguntas la prueba de mañana, son preguntas básicas, desde como se escriben cosas en html, estructuras básicas de todos los elementos de html interactivos, alguna pregunta de sobre como funcionan las rutas en html, las ventanas, los targets, las sintaxis de reglas en css, el significado de alguna regla, las estructuras de css, los formularios, e incluso algunas que tienen que ver con métodos antiguos que casi no hemos usado, sobre declaraciones básicas de elementos de sintaxis de javascript(de esta 3 o 4 preguntas), preguntas globales que tienen que ver con diferenciar los tipos de elementos html que tenemos, que es cada uno y para que es(index, etc...), conceptos de accesibilidad,  etc... Como no estan ordenadas, nos encontraremos las preguntas en cualquier posición del examen
 */
