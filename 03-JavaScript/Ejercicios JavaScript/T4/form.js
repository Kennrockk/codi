let nombre = document.getElementById("inputNombre").value;
let telefono = document.getElementById("inputTelef").value;
let fecha = document.getElementById("inputFecha").value;
let email = document.getElementById("inputEmail").value;
let dni = document.getElementById("inputDNI").value;

document.getElementById("form").addEventListener("submit", function (e) {
  let aceptaCondiciones = document.getElementById("aceptaCondiciones");
  let mensaje = document.getElementById("mensaje");
  let esValido = true;

  if (!validarNombre(nombre)) {
    mensaje.value +=
      "El nombre no puede empezar por un número y debe tener entre 3 y 20 carácteres.";
    esValido = false;
  }
  if (!validarTelefono(telefono)) {
    mensaje.value += "El teléfono no es válido.";
    esValido = false;
  }
  if (!validarFecha(fecha)) {
    mensaje.value += "La fecha no es válida.";
    esValido = false;
  }
  if (!validarEmail(email)) {
    mensaje.value += "El email no es válido.";
    esValido = false;
  }
  if (!validarDNI(dni)) {
    mensaje.value += "El DNI/NIE no es válido.";
    esValido = false;
  }
  if (!aceptaCondiciones.checked) {
    mensaje.value = "Has de aceptar las condiciones para continuar.";
    e.preventDefault();
    return;
  }
  if (!esValido) {
    e.preventDefault();
  }
});

function validarNombre(nombre) {
  if (/^\d/.test(nombre)) {
    return false;
  }
  if (nombre.length < 3 || nombre.length > 20) {
    return false;
  }
  return true;
}

function validarTelefono(telefono) {
  let tel = /^[679]{1}[0-9]{8}$/;
  return tel.test(telefono);
}

function validarFecha(fecha) {
  let nacimiento = new Date(fecha);
  let fechaActual = new Date();
  let edad = fechaActual.getFullYear() - nacimiento.getFullYear();
  return edad >= 18;
}

function validarEmail(email) {
  let em = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return em.test(email);
}

function validarDNI(dni) {
  let d = /^[XYZ]?\d{7,8}[A-Za-z]$/;
  return d.test(dni);
}

document.getElementById("guardarDatos").addEventListener("click", () => {
  setCookie("Nombre", nombre, 1);
  setCookie("Telefono", telefono, 1);
  setCookie("Fecha", fecha, 1);
  setCookie("Email", email, 1);
  setCookie("Dni", dni, 1);
});

document.getElementById("recuperarDatos").addEventListener("click", () => {
  document.getElementById("inputNombre").value = getCookie("Nombre");
  document.getElementById("inputTelef").value = getCookie("Telefono");
  document.getElementById("inputFecha").value = getCookie("Fecha");
  document.getElementById("inputEmail").value = getCookie("Email");
  document.getElementById("inputDNI").value = getCookie("Dni");
});

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].type === "text" || inputs[i].type === "date") {
    inputs[i].addEventListener("input", function () {
      let mensaje = document.getElementById("mensaje");
      mensaje.value = `El valor del ${inputs[i].id}: ${inputs[i].value} `;
      if (validarCampo(inputs[i].id, inputs[i].value)) {
        mensaje.value += "es válido.";
      } else {
        mensaje.value += "no es válido.";
      }
    });
  }
}

function validarCampo(id, valor) {
  switch (id) {
    case "inputNombre":
      return validarNombre(valor);
    case "inputTelef":
      return validarTelefono(valor);
    case "inputFecha":
      return validarFecha(valor);
    case "inputEmail":
      return validarEmail(valor);
    case "inputDNI":
      return validarDNI(valor);
  }
  return false;
}

document.getElementById("borrarDatos").addEventListener("click", () => {
  let con = window.confirm("estás segro que deseas borrar todo?");
  if (!con) {
    return;
  }
  document.getElementById("form").reset();
});
