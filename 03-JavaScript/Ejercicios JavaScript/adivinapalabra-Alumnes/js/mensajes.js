const indice = Math.floor(Math.random() * listado.length);
let pSecreta = listado[indice].palabra;

const msg = [
  `Enhorabuena! Encontraste la palabra "${pSecreta.toUpperCase()}". Has ganado, pero en realidad has perdido (tu tiempo)`,
  `Enhorabuena! Encontraste la palabra "${pSecreta.toUpperCase()}". Deja de jugar a esto y echa un Euromillón ... a ver si sales "probre"`,
  `Enhorabuena! Encontraste la palabra "${pSecreta.toUpperCase()}".  Deja de jugar a esto y prueba a lamer un ladrillo`,
  `Enhorabuena! Encontraste la palabra "${pSecreta.toUpperCase()}". Este juego no tiene secretos para ti`,
  `Enhorabuena! Encontraste la palabra "${pSecreta.toUpperCase()}".  Un gallifante para ti!!`,
  `Enhorabuena! Encontraste la palabra "${pSecreta.toUpperCase()}".  Has ganado un chorizo poco chupado`,
];
const msgError = [
  `Has fallado. La palabra correcta era "${pSecreta.toUpperCase()}". Esto es demasiado para un... como tú`,
  `Has fallado OTRA VEZ!!!. La palabra correcta era "${pSecreta.toUpperCase()}". Deberías dedicar tu tiempo a otras cosas`,
  `Has fallado. La palabra correcta era "${pSecreta.toUpperCase()}".. Las adivinanzas no son lo tuyo!!!`,
  `Has fallado. La palabra correcta era "${pSecreta.toUpperCase()}".... Zumo de Gato`,
  `Has fallado por no leer bien la pista, La palabra correcta era "${pSecreta.toUpperCase()}".... más fácil no puede ser esto!!!`,
  `Has fallado. La palabra correcta era "${pSecreta.toUpperCase()}".... y resulta que las cosas no son lo que parecen`,
];
