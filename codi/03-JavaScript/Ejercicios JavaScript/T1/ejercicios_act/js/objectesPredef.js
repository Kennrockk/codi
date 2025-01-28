function tabla() {
  let tabhtml = `<table>
  <tr>
    <th id="cabecera1"></th>
    <th id="cabecera2"></th>
  </tr>
  <tr>
    <td id="cont1">Alfreds Futterkiste</td>
    <td id="res1">Germany</td>
  </tr>
  <tr>
    <td id="cont2">Centro Moctezuma</td>
    <td id="res2">Mexico</td>
  </tr>
  <tr>
    <td id="cont3">Alfreds Futterkiste</td>
    <td id="res3">Germany</td>
  </tr>
  <tr>
    <td id="cont4">Centro Moctezuma</td>
    <td id="res4">Mexico</td>
  </tr>
  <tr>
    <td id="cont5">Alfreds Futterkiste</td>
    <td id="res5">Germany</td>
  </tr>
  <tr>
    <td id="cont6">Centro Moctezuma</td>
    <td id="res6">Mexico</td>
  </tr>
  <tr>
    <td id="cont7">Alfreds Futterkiste</td>
    <td id="res7">Germany</td>
  </tr>
  <tr>
    <td id="cont8">Centro Moctezuma</td>
    <td id="res8">Mexico</td>
  </tr>
  <tr>
    <td id="cont9">Alfreds Futterkiste</td>
    <td id="res9">Germany</td>
  </tr>
  <tr>
    <td id="cont10">Centro Moctezuma</td>
    <td id="res10">Mexico</td>
  </tr>
  <tr>
    <td id="cont11">Alfreds Futterkiste</td>
    <td id="res11">Germany</td>
  </tr>
</table>`;
  document.querySelector("#contenedor_tabla").innerHTML = tabhtml; // AQUI CREO LA TABLA EN el HTML, entonce sprimero debo hqacer que se escriba esto en el html para luego montar lo que sigue aqui abajo

  document.querySelector("#cabecera1").innerHTML = "PROPIETAT";
  document.querySelector("#cabecera2").innerHTML = "VALOR OBTINGUT AMB JS";
  document.querySelector("#cont1").innerHTML =
    "Valor màxim que pot tenir un número en JavaScript";
  document.querySelector("#cont2").innerHTML =
    "Valor mínim que pot tenir un número en JavaScript";
  document.querySelector("#cont3").innerHTML = "Alçada total de la pantalla";
  document.querySelector("#cont4").innerHTML = "Amplada total de la pantalla";
  document.querySelector("#cont5").innerHTML = "Alçada de la pàgina web";
  document.querySelector("#cont6").innerHTML = "Amplada de la pàgina web";
  document.querySelector("#cont7").innerHTML = "URL de la pàgina web";
  document.querySelector("#cont8").innerHTML =
    "Nom de la pàgina web amb la seva extensió (index.html)";
  document.querySelector("#cont9").innerHTML =
    "Nom de la pàgina web sense la seva extensió (index)";
  document.querySelector("#cont10").innerHTML =
    "Un valor aleatori entre 0 i 200 (utilitza Math)";
  document.querySelector("#cont11").innerHTML =
    "Sistema operatiu de lordinador.";
  document.querySelector("#res1").innerHTML = Number.MAX_VALUE;
  document.querySelector("#res2").innerHTML = Number.MIN_VALUE;
  document.querySelector("#res3").innerHTML = screen.height;
  document.querySelector("#res4").innerHTML = screen.width;
  document.querySelector("#res5").innerHTML = window.innerHeight;
  document.querySelector("#res6").innerHTML = window.innerWidth;
  document.querySelector("#res7").innerHTML = window.location.href;
  let primera = window.location.pathname.lastIndexOf("/");
  let ultima = window.location.pathname.lastIndexOf(".");
  document.querySelector("#res8").innerHTML =
    window.location.pathname.substring(primera + 1);
  document.querySelector("#res9").innerHTML =
    window.location.pathname.substring(primera + 1, ultima);
  document.querySelector("#res10").innerHTML = Math.floor(Math.random() * 201);
  document.querySelector("#res11").innerHTML = navigator.platform;
}
let titulo;
let text1;
let text2;
let tam = Math.floor(Math.random() * 400) + 50;
function finestra() {
  let cont = prompt(
    `Introduce un título entre 3 y 20 carácteres. A continuación pon una coma y escribe "yes" o "no"`
  );
  let h1 = cont.indexOf(",");
  text1 = cont.substring(0, h1);
  text2 = cont.substring(h1 + 1);
  console.log(text1.length);
  console.log(text2);
  while (
    text1.length < 3 ||
    text1.length > 20 ||
    (text2 != "yes" && text2 != "no")
  ) {
    /* alert("introduce texto válido"); */
    cont = prompt(
      `Introduce un título entre 3 y 20 carácteres. A continuación pon una coma y escribe "yes" o "no"`
    );
    h1 = cont.indexOf(",");
    text1 = cont.substring(0, h1);
    text2 = cont.substring(h1 + 1);
    console.log(text1.length);
    console.log(text2);
    console.log(text2);
  }
  // la variable h1 es igual a la posición donde se encuentra la coma.

  //aqui creamos una variable para recoger el primer valor,. lo que estamos haciendo es que con un substring, que extraiga de cont(variable donde se almacena lo escrito por el usuario) el valor desde el 0(la primera letra que introduce el usuario) hasta h1(que es la posición en la que se encuentra la ",". se debe expresar con una variable ya que no sabemos cuantos caracteres va a introducir el usuario, y si ponemos un valor absoluto, no nos asegura que sea la posicion de la ",")
  //substring captura hasta el final del texto ni no se le indica lo contrario.
  let tam = Math.floor(Math.random() * 400) + 50;
  let newfinestra = window.open(
    "finestra/finestra.html",
    "_blank",
    `location=no, menubar=no, titlebar=no, resizable=no, toolbar=no, menubar=no, width=${tam}, height=${tam}`
  );

  newfinestra.onload = function () {
    newfinestra.document.title = `${text1}`;
    function hora(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    const d = new Date();
    let h = hora(d.getHours());
    let m = hora(d.getMinutes());
    let s = hora(d.getSeconds());
    let time = h + ":" + m + ":" + s;

    let saludo;
    if (h <= 14 && h >= 6) {
      saludo = "Bon dia";
    } else if (h > 14 && h < 20) {
      saludo = "Bona tarda";
    } else {
      saludo = "Bona nit";
    }

    newfinestra.document.body.innerHTML = `${time} <br /> ${saludo}`;
  };
}
