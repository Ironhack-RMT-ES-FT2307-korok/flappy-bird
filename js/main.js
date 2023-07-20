// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");


// * STATE MANAGEMENT FUNCTIONS
function startGame() {

  console.log("iniciando el juego");

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // ... que el juego inicie
  // pendiente crear un nuevo objeto de Game y inicia el gameLoop
  let gameObj = new Game();
  console.log(gameObj)

  gameObj.gameLoop()


}





// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)





