//Obtener el elemento canvas y su contexto 2D
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Definir dimensiones del cuenco
const anchoCuenco = 120;
const alturaCuenco = 40;

// Variables para el estado del juego
let gameOver = false;
let pagina_inicio = true;
let score = 0;

// Definir la clase Cuenco para el jugador
class Cuenco {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  // Método para dibujar el cuenco en el canvas
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  // Método para mover el cuenco hacia la izquierda
  moverIzq() {
    this.x -= 20;
  }
  // Método para mover el cuenco hacia la derecha
  moverDrh() {
    this.x += 20;
  }

  // Método para verificar colisión con un ingrediente
  checkCollision(ingredient) {
    return (
      this.x < ingredient.x + ingredient.width &&
      this.x + this.width > ingredient.x &&
      this.y < ingredient.y + ingredient.height &&
      this.y + this.height > ingredient.y
    );
  }
}

// Crear una instancia de la imagen del cuenco y un objeto Cuenco
const cuencoImage = new Image();
cuencoImage.src = "./images/cuenco.png";
const cuenco = new Cuenco(375, 550, anchoCuenco, alturaCuenco, cuencoImage);

// Escuchar eventos de teclado para mover el cuenco
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    cuenco.moverIzq();
  } else if (event.key === "ArrowRight") {
    cuenco.moverDrh();
  }
});

// Array para almacenar los ingredientes en el juego
const ingredients = [];

// Función principal que maneja la lógica del juego y el bucle de animación
function updateGame() {
  if (!gameOver && !pagina_inicio) {
    // Verificar si el juego no ha terminado y no está en la página de inicio
    for (let i = ingredients.length - 1; i >= 0; i--) {
      const ingredient = ingredients[i];
      ingredient.y += 3; // Mover ingredientes hacia abajo

      // Verificar colisión con el cuenco
      if (cuenco.checkCollision(ingredient)) {
        // Manejar la colisión según el tipo de ingrediente
        if (
          ingredient.image.src.includes("carrot") ||
          ingredient.image.src.includes("cucumber") ||
          ingredient.image.src.includes("tomatoes") ||
          ingredient.image.src.includes("bellpepper") ||
          ingredient.image.src.includes("lettuce")
        ) {
          ingredients.splice(i, 1); // Eliminar el ingrediente

          if (
            ingredient.image.src.includes("carrot") ||
            ingredient.image.src.includes("cucumber") ||
            ingredient.image.src.includes("tomatoes") ||
            ingredient.image.src.includes("bellpepper") ||
            ingredient.image.src.includes("lettuce")
          ) {
            score += 1; // Aumentar el puntaje por cada verdura
          }
        } else if ((gameOver = true)) {
          // Si el juego está perdido, mostrar pantalla final y reiniciar después de 5 segundos
          pantallaJuegoNode.style.display = "none";
          pantallaFinalNode.style.display = "flex";
          setTimeout(() => {
            location.reload(); // Reinicio a la página de inicio
          }, 5000);
        }
      }
      //Elimina los ingredientes que han pasado el cuenco
      if (ingredient.y > canvas.height + ingredient.height) {
        ingredients.splice(i, 1);
      }
    }
    //Genera aleatoriamente nuevos ingredientes con una probabilidad del 2%
    if (Math.random() < 0.02) {
      const x = Math.random() * (canvas.width - 30) + 15;
      const imagenVerdura = randomIngredientes();
      const nuevoIngredient = new Ingredient(x, 0, imagenVerdura, 40, 40);
      ingredients.push(nuevoIngredient);
    }
  }
  // Limpiar el canvas y dibujar el cuenco y los ingredientes
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cuenco.draw();
  for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].draw(ctx);
  }

  // Dibujar el puntaje en el canvas
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);

  // Solicitar la próxima animación del juego
  requestAnimationFrame(updateGame);
}

// Iniciar el bucle de juego
updateGame();
