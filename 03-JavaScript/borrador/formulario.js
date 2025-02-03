/* // Validació del formulari
document.getElementById("formulari").addEventListener("submit", function (e) {
  let acceptaCondicions = document.getElementById("acceptaCondicions").checked;
  let mensaje = document.getElementById("mensaje");

  if (!acceptaCondicions) {
    mensaje.value = "Has d'acceptar les condicions per continuar.\n";
    e.preventDefault(); // Evita que el formulari s'enviï
    return;
  }

  // Validació dels camps
  let nombre = document.getElementById("inputNombre").value;
  let telefono = document.getElementById("inputTelef").value;
  let dia = document.getElementById("inputDia").value;
  let mes = document.getElementById("inputMes").value;
  let ano = document.getElementById("inputAno").value;
  let email = document.getElementById("inputEmail").value;
  let dni = document.getElementById("inputDNI").value;

  let esValido = true;
  mensaje.value = ""; // Netegem el mensaje anterior

  if (!validarNombre(nombre)) {
    mensaje.value +=
      "El nombre no pot començar per un número i ha de tenir entre 3 i 20 caràcters.\n";
    esValido = false;
  }
  if (!validarTelefono(telefono)) {
    mensaje.value += "El telèfon ha de tenir un format vàlid.\n";
    esValido = false;
  }
  if (!validarFecha(dia, mes, ano)) {
    mensaje.value += "Has de ser major d'edat.\n";
    esValido = false;
  }
  if (!validarEmail(email)) {
    mensaje.value += "L'email ha de tenir un format vàlid.\n";
    esValido = false;
  }
  if (!validarDNI(dni)) {
    mensaje.value += "El DNI/NIE ha de tenir un format vàlid.\n";
    esValido = false;
  }

  if (!esValido) {
    e.preventDefault(); // Evita que el formulari s'enviï si hi ha errors
  }
});

// Funcions de validació
function validarNombre(nombre) {
  return !/^\d/.test(nombre) && nombre.length >= 3 && nombre.length <= 20;
}

function validarTelefono(telefono) {
  let regex = /^[6-9]\d{8}$/;
  return regex.test(telefono);
}

function validarFecha(dia, mes, ano) {
  let data = new Date(ano, mes - 1, dia);
  let avui = new Date();
  let edat = avui.getFullYear() - data.getFullYear();
  return edat >= 18;
}

function validarEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarDNI(dni) {
  let regex = /^[XYZ]?\d{7,8}[A-Za-z]$/;
  return regex.test(dni);
}

// Guardar dades en cookies
document.getElementById("guardarDades").addEventListener("click", function () {
  guardarDades();
});

function guardarDades() {
  let inputs = document.querySelectorAll('#formulari input[type="text"]');
  inputs.forEach((input) => {
    document.cookie = `${input.id}=${input.value}; path=/`;
  });
  document.getElementById("mensaje").value = "Dades guardades correctament.\n";
}

// Recuperar dades de les cookies
document
  .getElementById("recuperarDades")
  .addEventListener("click", function () {
    recuperarDades();
  });

function recuperarDades() {
  let inputs = document.querySelectorAll('#formulari input[type="text"]');
  inputs.forEach((input) => {
    let valor = getCookie(input.id);
    if (valor) {
      input.value = valor;
    } else {
      input.value = "";
    }
  });
  document.getElementById("mensaje").value = "Dades recuperades.\n";
}

// Funció per obtenir el valor d'una cookie
function getCookie(nombre) {
  let name = nombre + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Mostrar missatges al TextArea mentre l'usuari escriu
document.querySelectorAll('#formulari input[type="text"]').forEach((input) => {
  input.addEventListener("input", function () {
    let mensaje = document.getElementById("mensaje");
    mensaje.value = `Valor de ${input.id}: ${input.value}\n`;
    if (validarCamp(input.id, input.value)) {
      mensaje.value += "El valor és vàlid.\n";
    } else {
      mensaje.value += "El valor no és vàlid.\n";
    }
  });
});

function validarCamp(id, valor) {
  switch (id) {
    case "inputNom":
      return validarNombre(valor);
    case "inputTelef":
      return validarTelefono(valor);
    case "inputEmail":
      return validarEmail(valor);
    case "inputDNI":
      return validarDNI(valor);
    default:
      return true;
  }
} */

// Función principal que se ejecuta cuando se intenta enviar el formulario
document.getElementById("form").addEventListener("submit", function (e) {
  // Verificar si el checkbox de condiciones está marcado
  let aceptaCondiciones = document.getElementById("aceptaCondiciones").checked;
  let mensaje = document.getElementById("mensaje");

  // Si no está marcado, mostrar un mensaje y evitar que el formulario se envíe
  if (!aceptaCondiciones) {
    mensaje.value = "Has de aceptar las condiciones para continuar.";
    e.preventDefault(); // Detener el envío del formulario
    return; // Salir de la función
  }

  // Obtener los valores de los campos del formulario
  let nombre = document.getElementById("inputNombre").value;
  let telefono = document.getElementById("inputTelef").value;
  let fecha = document.getElementById("inputfecha").value; // Nuevo camp
  let email = document.getElementById("inputEmail").value;
  let dni = document.getElementById("inputDNI").value;

  // Variable para saber si todos los campos son válidos
  let esValido = true;

  // Limpiar el TextArea de mensajes anteriores

  // Validar el nombre
  if (!validarNombre(nombre)) {
    mensaje.value +=
      "El nombre no puede empezar por un número y debe tener entre 3 y 20 carácteres.";
    esValido = false;
  }

  // Validar el teléfono
  if (!validarTelefono(telefono)) {
    mensaje.value += "El teléfono ha de tener un formato válido.";
    esValido = false;
  }

  // Validar la fecha de nacimiento
  if (!validarFecha(fecha)) {
    // Validar el nuevo campo de fecha
    mensaje.value += "Has de ser mayor de edad.";
    esValido = false;
  }

  // Validar el email
  if (!validarEmail(email)) {
    mensaje.value += "El email ha de tener un formato válido.";
    esValido = false;
  }

  // Validar el DNI/NIE
  if (!validarDNI(dni)) {
    mensaje.value += "El DNI/NIE ha de tener un formato válido.";
    esValido = false;
  }

  // Si hay algún error, evitar que el formulario se envíe
  if (!esValido) {
    e.preventDefault();
  }
});

// Función para validar el nombre
function validarNombre(nombre) {
  // El nombre no puede empezar con un número
  if (/^\d/.test(nombre)) {
    return false;
  }
  // El nombre debe tener entre 3 y 20 caracteres
  if (nombre.length < 3 || nombre.length > 20) {
    return false;
  }
  // Si pasa las dos condiciones, es válido
  return true;
}

// Función para validar el teléfono
function validarTelefono(telefono) {
  // El teléfono debe empezar con 6, 7, 8 o 9 y tener 9 dígitos
  let tel = /^[6-9]\d{8}$/;
  return tel.test(telefono);
}

// Función para validar la fecha de nacimiento
function validarFecha(dia, mes, ano) {
  // Crear una fecha con los valores proporcionados
  let nacimiento = new Date(fecha);
  let fechaActual = new Date();
  // Calcular la edad
  let edad = fechaActual.getFullYear() - nacimiento.getFullYear();
  // Verificar si la edad es mayor o igual a 18
  return edad >= 18;
}

// Función para validar el email
function validarEmail(email) {
  // El email debe tener un formato válido (algo@algo.algo)
  let em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return em.test(email);
}

// Función para validar el DNI/NIE
function validarDNI(dni) {
  // El DNI/NIE debe tener un formato válido (8 números y una letra, o empezar con X, Y, Z)
  let d = /^[XYZ]?\d{7,8}[A-Za-z]$/;
  return d.test(dni);
}

// Mostrar mensajes en el TextArea mientras el usuario escribe
let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].type === "text" || inputs[i].type === "date") {
    inputs[i].addEventListener("input", function () {
      let mensaje = document.getElementById("mensaje");
      mensaje.value = `El valor del ${inputs[i].id}: ${inputs[i].value}`;
      if (validarCampo(inputs[i].id, inputs[i].value)) {
        mensaje.value += "El valor es válido.";
      } else {
        mensaje.value += "El valor no es válido.";
      }
    });
  }
}
mensaje.value = ""; // Limpiar el mensaje al cargar la página

// Función para validar un campo específico
function validarCampo(id, valor) {
  if (id === "inputNombre") {
    return validarNombre(valor);
  } else if (id === "inputTelef") {
    return validarTelefono(valor);
  } else if (id === "inputData") {
    return validarData(valor);
  } else if (id === "inputEmail") {
    return validarEmail(valor);
  } else if (id === "inputDNI") {
    return validarDNI(valor);
  } else {
    return true;
  }
}
