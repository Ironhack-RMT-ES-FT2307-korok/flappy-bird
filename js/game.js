console.log("desde game.js");

class Game {

  constructor() {
    // aqui estarán todas las propiedades de mi juego


    
  }



  // los metodos de mi juego
  gameLoop = () => {
    // console.log("ejecutando gameLoop")
    // ESTO SE ESTA EJECUTANDO 60 VECES POR SEGUNDO

    // muchas cosas

    requestAnimationFrame( this.gameLoop )

  }


}

// planificacion

// propiedades
// el pollo => x, y, w, h
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
