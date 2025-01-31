function cambionombre() {
  let cambionombre = `<label class="form-label" for="text">Cambia el nombre de la pestaña:</label>
    <input type="text" id="nom" name="nombre" class="form-control mb-5">
  <button class="btn btn-primary" onclick="boton();">Ejecutar Ejercicio</button>`;
  document.querySelector("#contenedor").innerHTML = cambionombre;
}
function boton() {
  const nombre = document.getElementById("nom").value.trim();
  if (nombre !== document.title) {
    document.title = nombre;
  }
}
