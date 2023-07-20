console.log("desde game.js");

class Game {

  constructor() {
    // aqui estarán todas las propiedades de mi juego

    // aqui vamos a crear un pollito. new Pollito
    this.pollito = new Pollito()
    console.log(this.pollito)

    // vamos a agregar los tubos
    // this.unObstaculo = new Obstaculo()
    this.obstaculosArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

  gameOver = () => {
    this.isGameOn = false; // detiene la recursion
    gameScreenNode.style.display = "none"; // ocultar la pantalla de juego
    gameoverScreenNode.style.display = "flex"; // mostrar la pantalla final
  }

  collisionPollitoObstaculos = () => {

    // el pollito => this.pollito
    this.obstaculosArr.forEach((cadaObstaculo) => {
      // los obstaculos => cadaObstaculo
      if (
        this.pollito.x < cadaObstaculo.x + cadaObstaculo.w &&
        this.pollito.x + this.pollito.w > cadaObstaculo.x &&
        this.pollito.y < cadaObstaculo.y + cadaObstaculo.h &&
        this.pollito.y + this.pollito.h > cadaObstaculo.y
      ) {
        // Collision detected!
        this.gameOver()
      }
    })

  }

  collisionPollitoSuelo = () => {
    if (this.pollito.y + this.pollito.h > gameBoxNode.offsetHeight) {
      console.log("el pollito se estampo contra el piso")
      this.gameOver()
    }
  }

  obstaculosDesaparecen = () => {

    // si, el primer elemento del array ha salido a la vista
    if (this.obstaculosArr[0].x < -50) {
      // removemos el primer elemento del array
      this.obstaculosArr[0].node.remove() // remover el elemento de DOM
      this.obstaculosArr.shift() // remover el obj del array
    }

  }

  obstaculosAparecen = () => {
    // obstaculeSpawning
    // cuando queremos que apareazan ostaculos?
    // - Al inicio del juego. this.obstaculosArr.length === 0
    // - cuando hayan pasado 2 segundos.  this.frames % 120 === 0
    if (this.obstaculosArr.length === 0 || this.frames % 120 === 0) {

      let randomPositionY = Math.floor( Math.random() * -200 ) // -200 y 0
      console.log(randomPositionY)

      let nuevoObstaculoArriba = new Obstaculo(randomPositionY, true)
      this.obstaculosArr.push( nuevoObstaculoArriba )
      
      let nuevoObstaculoAbajo = new Obstaculo(randomPositionY + 380, false)
      this.obstaculosArr.push( nuevoObstaculoAbajo )
      
      console.log(this.obstaculosArr)
    }

  }

  // los metodos de mi juego
  gameLoop = () => {
    this.frames++;
    // console.log(this.frames)
    // console.log("ejecutando gameLoop")
    // ESTO SE ESTA EJECUTANDO 60 VECES POR SEGUNDO

    // muchas cosas
    // this.pollito.y += 1;
    // this.pollito.node.style.top = `${this.pollito.y}px`;

    this.pollito.gravityEffect();
    // this.pollito.jumpEffect() // esta accion no va en el gameLoop
    // this.unObstaculo.automaticMovement();

    this.obstaculosAparecen();

    this.obstaculosArr.forEach((cadaObstaculo) => {
      cadaObstaculo.automaticMovement();
    })

    this.obstaculosDesaparecen();
    this.collisionPollitoSuelo();
    this.collisionPollitoObstaculos();




    if (this.isGameOn === true) {
      requestAnimationFrame( this.gameLoop )
    } // si isGameOn es false, deten la recursion

  }


}

// planificacion

// propiedades
// el pollo => x, y, w, h CHECK
// los tubos => x, y, w, h CHECK

// metodos
// randomizar los tubos CHECK
// colisiones de pollo con los tubos
// colisiones de pollo el suelo
// el movimiento de los tubos CHECK
// movimiento caida del pollo  CHECK
// accion del salto => addEventListener CHECK
// gameover accion

// Extra
// propiedad de el score
// metodo incrementar una puntuacion
// efecto de aumentar la velocidad (complejo)
// reinicio del juego

// EXTRA EXTRA
// sonidos
