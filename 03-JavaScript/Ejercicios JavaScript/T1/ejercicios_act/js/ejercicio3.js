if (navigator.cookieEnabled) {
  console.log(navigator.cookieEnabled);
  let n = window.confirm(
    "Esta página requiere el uso de cookies para funcionar correctamente. ¿Aceptas el uso de cookies?"
  );
  console.log(n);
  if (n == true) {
    console.log(window.confirm);
    alert("Has aceptado el uso de cookies.");
  } else {
    console.log(window.confirm);
    alert("Has rechazado el uso de cookies");
    window.location.href = "https://google.es";
  }
}
