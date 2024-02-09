class Ingredient {
    constructor(x, y, imageSrc, width, height) {
        // Inicializar las propiedades de la instancia con los parámetros proporcionados
        this.x = x;
        this.y = y;
        this.image = new Image(); // Crear una nueva instancia de la clase Image para la imagen del ingrediente
        this.image.src = imageSrc; // Establecer la fuente de la imagen con la ruta proporcionada
        this.width = width;
        this.height = height;
        this.image.onload = () => {
            // Se ejecuta cuando la imagen se ha cargado completamente
            this.draw();// Llama a la función de dibujo después de que la imagen se ha cargado
           
        };
    }

    // Método para dibujar el ingrediente en el canvas
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

  
  }
// Función que devuelve una ruta de imagen aleatoria de un array de ingredientes
  function randomIngredientes() {
    const ingredientes = ["./images/carrot.png", "./images/lettuce.jpg", "./images/cucumber.png", "./images/bellpepper.png", "./images/elephant.png", "./images/bee.png"];
    const randomIndex = Math.floor(Math.random() * ingredientes.length); // Generar un índice aleatorio
    return ingredientes[randomIndex];// Devolver la ruta de imagen correspondiente al índice aleatorio
  } 

  