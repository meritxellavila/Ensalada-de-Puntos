const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
//const pantallaFinalNode = document.querySelector("#pantalla-final");
const anchoCuenco = 60;
const alturaCuenco = 60;
let gameOver = false;
let pagina_inicio = true;
class Cuenco {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }
  draw() {
    // ctx.fillStyle = this.color;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  moverIzq() {
    this.x -= 10;
  }
  moverDrh() {
    this.x += 10;
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
const cuenco = new Cuenco(
  375,
  550,
  anchoCuenco,
  alturaCuenco,
  cuencoImage
);
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
    ingredients.forEach((ingredient) => {
      ingredient.y += 3; // Flujo de caída de las verduras
      if (cuenco.checkCollision(ingredient)) {
        if (
          ingredient.image.src.includes(//
              
           "carrot" || "cucumber" || "tomatoes" || "bellpepper" || "lettuce"
          )
        ) {
          const index = ingredients.indexOf(ingredient);
          console.log(index);          
          ingredients.splice(index, 1);
        } else if ((gameOver = true)) { 
          pantallaJuegoNode.style.display = "none";
          pantallaFinalNode.style.display = "flex";
          setTimeout(() => {
              location.reload(); // Reinicio a la página de inicio   
              
          }, 2000);
        }
      }
      if (ingredient.y > canvas.height + ingredient.height) {
        const index = ingredients.indexOf(ingredient);
        ingredients.splice(index, 1);
        console.log(index);
        
      }
    });
    if (Math.random() < 0.02) {
      const x = Math.random() * (canvas.width - 30) + 15;
      const imagenVerdura = RandomIngredientes();//retorna imagen  vegetal aleatorio
      const nuevoIngredient = new Ingredient(x, 0, imagenVerdura, 40, 40); //retorna vegetal aleatorio
      ingredients.push(nuevoIngredient);
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cuenco.draw();
  ingredients.forEach((ingredient) => ingredient.draw(ctx));
  requestAnimationFrame(updateGame);
}
updateGame();
