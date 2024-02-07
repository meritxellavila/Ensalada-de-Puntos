class Game {
  /* propiedades del juego */
  constructor(x, y) {
    this.gameIntervalFrequency = Math.round(1000 / 60); // 60fps o 60 veces por segundo. Recomendado no tocar.

    this.cuencoObj = new Cuenco(375, 550);
    this.x = 300;
    this.y = 300;
  }

  /*funciones del juego-metodos  */

  moverIzquierda() {
    this.x -= 10;
  }

  moverDerecha() {
    this.x += 10;
  }

  fondo() {}

  collition(ingredientesEnsalada) {}

  noIngredientes(otros) {}

  gameLoop() {
    
    // se ejecuta 60 veces por segundo
    // console.log("intervalo de juego")
  }

  gameLoop = () => {
    this.cuencoObj.cuencoGravity();

    actualizarPosicionCuenco() {
      this.cuencoObj.style.left = this.posicionX + 'px';
  }
  
    moverCuenco(event) {
      const tecla = event.key;
      
      // Mover la paleta a la izquierda si se presiona la flecha izquierda
      if (tecla === 'ArrowLeft' && this.posicionX > 0) {
          this.posicionX -= 10;
      }
      
      // Mover la paleta a la derecha si se presiona la flecha derecha
      if (tecla === 'ArrowRight' && this.posicionX < this.lienzoAncho - this.cuencoObj.offsetWidth) {
          this.posicionX += 10;
      }
  };
}

