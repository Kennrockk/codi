function otraAlerta() {
  window.confirm("Esta ventana es un confirm. apreta 'aceptar' para cerrarlo");
}
var miVideo = document.getElementById("musicos");
function ReproducePara() {
  if (miVideo.paused) miVideo.play();
  else miVideo.pause();
}
function haceGrande() {
  miVideo.width = 560;
}
function haceMediano() {
  miVideo.width = 380;
}
function hacePequeño() {
  miVideo.width = 144;
}
