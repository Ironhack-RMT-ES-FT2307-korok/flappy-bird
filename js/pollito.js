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

    // ajustar el tamaño y posición inicial del pollito
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

  }

  // aqui los metodos del pollito
  gravityEffect = () => {

    this.y += 1;
    this.node.style.top = `${this.y}px`;

  }

  jumpEffect = () => {
    
    this.y -= 20;
    this.node.style.top = `${this.y}px`;

  }

}