console.log("desde pollito.js")

class Pollito {

  constructor() {
    console.log("Esto ocurre una sola vez cuando se crea un nuevo pollito")

    // crear el elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/flappy.png";
    gameBoxNode.append(this.node)

    // aqui las propiedades del pollito
    this.x = 50; // posicion eje X
    this.y = 50; // posicion eje Y
    this.w = 40; // ancho
    this.h = 35; // alto

    this.gravitySpeed = 2;
    this.jumpSpeed = 40;

    // ajustar el tamaño y posición inicial del pollito
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  // aqui los metodos del pollito
  gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdate()
  }

  jumpEffect = () => {
    this.y -= this.jumpSpeed;
    this.positionUpdate()
    // this.x += 5;
    // this.node.style.left = `${this.x}px`;
  }

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
    // el pollito solo se mueve en el eje Y
    // si tambien se moviera en el X o otros cambios afectaran al pollito, irian en esta seccion

  }

}