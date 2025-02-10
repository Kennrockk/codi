/* 
LocalStorage, sessionStorage
Los objetos de almacenaje web 


API:

setItem(clave, valor) - guarda pares clave/valor.
getItem(clave) - coge el valor de una clave.
removeItem(clave) - borra una clave con su valor.
clear() - borra todo.
key(índice) - coge la clave en una posición determinada.
length - el número de ítems almacenados.
Utiliza Object.keys para conseguir todas las claves.

localStorage - sessionStorage.
Tanto la clave como el valor deben ser strings.
El límite es de más de 5mb aprox, dependiendo del navegador.
Los datos están vinculados al origen (dominio/puerto/protocolo).

LocalStorage mantiene datos entre todas las pestañas y ventanas que tengan el miso origen, sobrevive a reinicios del navegador.

sessionStorage es solo accesible en una pestaña del navegador, incluyendo iframes del mismo origen.

localStorage: No expiran.

sessionStorage : Muere al cerrar la pestaña.
*/

const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
let cajadatos = document.querySelector("#cajadatos");

const eliminar = (clave) => {
  if (confirm("¿Estás seguro?")) {
    sessionStorage.removeItem(clave);
    mostrar();
  }
};

const eliminarTodo = () => {
  if (confirm("¿Seguro?")) {
    sessionStorage.clear();
    cajadatos.innerHTML = "";
    mostrar();
  }
};

const mostrar = () => {
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
  for (let f = 0; f < sessionStorage.length; f++) {
    let clave = sessionStorage.key(f);
    let valor = sessionStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <input type="button" onclick="eliminar('${clave}')" value="Eliminar"</div>`;
  }
};

const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = val.value;

    sessionStorage.setItem(clave, valor);

    indice.value = "";
    val.value = "";
    mostrar();
  });
};

addEventListener("load", iniciar);
