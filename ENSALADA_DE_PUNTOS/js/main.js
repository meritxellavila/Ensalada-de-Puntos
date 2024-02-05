const pantallaInicioNode = document.querySelector("#pantalla-inicio")
const pantallaJuegoNode = document.querySelector("#pantalla-juego")
const cajaDeJuegoNode = document.querySelector("#caja-de-juego")
const pantallaFinalNode = document.querySelector("#pantalla-final")
const startButtonNode = document.querySelector("#start-button")

let gameObj;

/*funciones*/
function inicioJuego() {
     console.log("clickando");       


// OCULTAR PANTALLA DE INICIO 
pantallaInicioNode.style.display = "none";


//MOSTRAR LA PANTALLA DE JUEGO

pantallaJuegoNode.style.display = "flex";

//CREAR EL OBJETO DE JUEGO
gameObj = new Game();
console.log(gameObj)

//INICIAR EL JUEGO 
gameObj.start()
}


startButtonNode.addEventListener("click", inicioJuego) 

cajaDeJuegoNode.addEventListener("click", () => {
  
  })
