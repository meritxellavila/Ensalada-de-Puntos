const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const anchoCuenco = 120;
const alturaCuenco = 40;

let gameOver = false;
let pagina_inicio = true;
let score = 0;

class Cuenco {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moverIzq() {
    this.x -= 20;
  }

  moverDrh() {
    this.x += 20;
  }

  checkCollision(ingredient) {
    return (
      this.x < ingredient.x + ingredient.width &&
      this.x + this.width > ingredient.x &&
      this.y < ingredient.y + ingredient.height &&
      this.y + this.height > ingredient.y
    );
  }
}

const cuencoImage = new Image();
cuencoImage.src = "./images/cuenco.png";
const cuenco = new Cuenco(375, 550, anchoCuenco, alturaCuenco, cuencoImage);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    cuenco.moverIzq();
  } else if (event.key === "ArrowRight") {
    cuenco.moverDrh();
  }
});

const ingredients = [];

function updateGame() {


  if (!gameOver && !pagina_inicio) {
    for (let i = ingredients.length - 1; i >= 0; i--) {
      const ingredient = ingredients[i];
      ingredient.y += 3;
      
      if (cuenco.checkCollision(ingredient)) {
        if (
          ingredient.image.src.includes("carrot")  ||
          ingredient.image.src.includes("cucumber") ||
          ingredient.image.src.includes("tomatoes") ||
          ingredient.image.src.includes("bellpepper") ||
          ingredient.image.src.includes("lettuce")
        ) {

          ingredients.splice(i, 1);

          if (ingredient.image.src.includes("carrot") ||
          ingredient.image.src.includes("cucumber") ||
          ingredient.image.src.includes("tomatoes") ||
          ingredient.image.src.includes("bellpepper") ||
          ingredient.image.src.includes("lettuce")) {
        score += 1; // Aumentar el puntaje por cada zanahoria
        console.log("Score: " + score);
      }
            
          
          
        } else if ( gameOver = true ){
          pantallaJuegoNode.style.display = "none";
          pantallaFinalNode.style.display = "flex";
          setTimeout(() => {
          location.reload(); // Reinicio a la página de inicio
          }, 5000);
        }
        
      }

      if (ingredient.y > canvas.height + ingredient.height) {
        ingredients.splice(i, 1);
      }
    }

    if (Math.random() < 0.02) {
      const x = Math.random() * (canvas.width - 30) + 15;
      const imagenVerdura = randomIngredientes();
      const nuevoIngredient = new Ingredient(x, 0, imagenVerdura, 40, 40);
      ingredients.push(nuevoIngredient);
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cuenco.draw();
  for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].draw(ctx);    
  }

   // Dibujar el puntaje
   ctx.fillStyle = "black"; // Color del texto
   ctx.font = "20px Arial"; // Estilo y tamaño de fuente
   ctx.fillText("Score: " + score, 10, 30); // Texto y posición

  requestAnimationFrame(updateGame);
}

updateGame();

