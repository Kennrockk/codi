const m1 = document.querySelector("#mostra1");
const m2 = document.querySelector("#mostra2");
const error = document.querySelector("#error");
/* const formu = document.forms['firstContact']; */ // Igual que la línea siguiente:
const formu = document.firstContact;
const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;

formu.addEventListener("submit", (e) => {
  const mydni = c_dni();
  const myedad = c_edad();

  if (!mydni || !myedad) {
    e.preventDefault();
    error.innerHTML =
      "ERRORUM. No se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
    error.style.color = "#FF0000";
    return false;
  } else {
    error.innerHTML = "Enviando";
    error.style.color = "#";
  }
});

const c_dni = () => {
  let rdni = formu.dni.value;
  rdni = rdni.toUpperCase();
  let numero, unaLetra;
  let resul = rdni.match(pdni);
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (resul) {
    numero = rdni.substr(0, rdni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    unaLetra = rdni.substr(rdni.length - 1, 1);
    numero = numero % 23; // Módulo 23 para obtener la letra correspondiente al número del DNI introducido por el usuario.
    letra = letra.substring(numero, numero + 1);

    if (letra !== unaLetra) return false;
    return true;
  } else {
    return false;
  }
};

const c_edad = () => {
  let fechaNacimiento = formu.miedad.value;
  let fechaNace = new Date(fechaNacimiento);
  console.log(fechaNace);
  let fechaActual = new Date();

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();

  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24 * 365.25)
  );
  if (mi_edad >= 18 && mi_edad <= 100) return true;
  return false;
};

const pasaValor = (event) => {
  let result;
  switch (event.target.name) {
    case "miedad":
      result = c_edad();
      if (result) {
        m1.innerHTML = "Tienes más de 18 años";
        miedad.style.border = "solid 1px green";
        error.innerHTML = "";
      } else {
        m1.innerHTML =
          "No puedes registrarte porque tienes menos de 18 años o más de 100 años";
        miedad.style.border = "solid 1px red";
      }
      break;
    case "dni":
      result = c_dni();
      if (result) {
        m2.innerHTML = "DNI válido";
        dni.style.border = "solid 1px green";
        error.innerHTML = "";
      } else {
        m2.innerHTML = "DNI o NIE no válido";
        dni.style.border = "solid 1px red";
      }
      break;
  }
};
const listeners = [formu.dni, formu.miedad];
for (const listener of listeners) listener.addEventListener("keyup", pasaValor); // Recorremos el array de listeners y añadimos el evento keyup a cada uno de ellos. el iterador of recorre el array de listeners, y listener es el valor de cada uno de los elementos del array, que en este caso son los elementos del formulario, dni y miedad, a los que se les añade el evento keyup, que se activa cuando se suelta una tecla del teclado.
