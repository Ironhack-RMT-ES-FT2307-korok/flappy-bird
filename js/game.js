console.log("desde game.js");

class Game {

  constructor() {
    // aqui estarán todas las propiedades de mi juego

    // aqui vamos a crear un pollito. new Pollito
    this.pollito = new Pollito()
    console.log(this.pollito)


  }



  // los metodos de mi juego
  gameLoop = () => {
    // console.log("ejecutando gameLoop")
    // ESTO SE ESTA EJECUTANDO 60 VECES POR SEGUNDO

    // muchas cosas
    // this.pollito.y += 1;
    // this.pollito.node.style.top = `${this.pollito.y}px`;

    this.pollito.gravityEffect()
    // this.pollito.jumpEffect() // esta accion no va en el gameLoop

    requestAnimationFrame( this.gameLoop )

  }


}

// planificacion

// propiedades
// el pollo => x, y, w, h CHECK
// los tubos => x, y, w, h

// metodos
// randomizar los tubos
// colisiones de pollo con los tubos
// colisiones de pollo el suelo
// el movimiento de los tubos
// movimiento caida del pollo 
// accion del salto => addEventListener
// gameover accion

// Extra
// propiedad de el score
// metodo incrementar una puntuacion
// efecto de aumentar la velocidad (complejo)
// reinicio del juego

// EXTRA EXTRA
// sonidos
