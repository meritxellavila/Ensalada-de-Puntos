const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
//const pantallaFinalNode = document.querySelector("#pantalla-final");
const collectorWidth = 60;
const collectorHeight = 60;
let gameOver = false;
let inicio = true;
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
cuencoImage.src = "./images/cuenco.jpg";
const collector = new Cuenco(
  375,
  550,
  collectorWidth,
  collectorHeight,
  cuencoImage
);
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    collector.moverIzq();
  } else if (event.key === "ArrowRight") {
    collector.moverDrh();
  }
});

const ingredients = [];
function updateGame() {
  if (!gameOver && !inicio) {
    ingredients.forEach((ingredient) => {
      ingredient.y += 3;
      if (collector.checkCollision(ingredient)) {
        if (
          ingredient.image.src.includes(
            "carrot" || "cucumber" || "carrot" || "bellpepper" || "lettuce"
          )
        ) {
          const index = ingredients.indexOf(ingredient);
          ingredients.splice(index, 1);
        } else if ((gameOver = true)) {
          pantallaJuegoNode.style.display = "none";
         pantallaFinalNode.style.display = "flex";
        }
      }
      if (ingredient.y > canvas.height + ingredient.height) {
        const index = ingredients.indexOf(ingredient);
        ingredients.splice(index, 1);
      }
    });
    if (Math.random() < 0.02) {
      const x = Math.random() * (canvas.width - 30) + 15;
      const vegetableImage = RandomIngredientes();
      const newIngredient = new Ingredient(x, 0, vegetableImage, 40, 40);
      ingredients.push(newIngredient);
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collector.draw();
  ingredients.forEach((ingredient) => ingredient.draw(ctx));
  requestAnimationFrame(updateGame);
}
updateGame();
