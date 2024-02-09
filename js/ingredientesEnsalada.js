class Ingredient {
    constructor(x, y, imageSrc, width, height) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = imageSrc;
        this.width = width;
        this.height = height;
        this.image.onload = () => {
            // Llama a la función de dibujo después de que la imagen se haya cargado completamente
            this.draw();
           
        };
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

  
  }

  function randomIngredientes() {
    const ingredientes = ["./images/carrot.png", "./images/lettuce.jpg", "./images/cucumber.png", "./images/bellpepper.png", "./images/elephant.png", "./images/bee.png"];
    const randomIndex = Math.floor(Math.random() * ingredientes.length);
    return ingredientes[randomIndex];
  } 

  