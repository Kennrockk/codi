document.getElementById("form").addEventListener("submit", function (e) {
  let nombre = document.getElementById("inputNombre").value;
  let telefono = document.getElementById("inputTelef").value;
  let fecha = document.getElementById("inputFecha").value;
  let email = document.getElementById("inputEmail").value;
  let dni = document.getElementById("inputDNI").value;
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
