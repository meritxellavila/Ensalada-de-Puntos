const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#gameCanvas");
const startButtonNode = document.querySelector("#start-button");
const pantallaFinalNode = document.querySelector("#pantalla-final");

function inicioJuego() {  //al click del boton Inicio entra esta funcion (pantalla de juego) 
  pagina_inicio = false; // Estado de página de inicio
  pantallaInicioNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

}

startButtonNode.addEventListener("click", inicioJuego);
