class Cuenco {
  constructor() {
    this.x = 150; // posición desde la izquierda de la pantalla de juego
    this.y = 150; // la posición desde el tope de la pantalla de juego
    this.w = 100; // ancho del cuenco
    this.h = 20// alto del cuenco
    this.cuencoSpeed = 50;

    this.node = document.createElement("img");
    this.node.src ="./images/cuenco.jpg";
    this.node.style = "absolute";



    /*Añadirlo a la caja de juego*/
    cajaDeJuegoNode.append(this.node)
   
   
    }



  }



