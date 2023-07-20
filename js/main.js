// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");

let gameObj = null; // el juego aun no ha iniciado

// * STATE MANAGEMENT FUNCTIONS
function startGame() {

  console.log("iniciando el juego");

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // ... que el juego inicie
  // pendiente crear un nuevo objeto de Game y inicia el gameLoop
  gameObj = new Game();
  console.log(gameObj)

  gameObj.gameLoop()
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
gameBoxNode.addEventListener("click", () => {
  console.log("haciendo click")

  // como invocamos la funcion jumpEffect
  // let pollito = new Pollito()
  gameObj.pollito.jumpEffect()
})




