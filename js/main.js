// Obtener referencias a elementos del DOM
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#gameCanvas");
const startButtonNode = document.querySelector("#start-button");
const pantallaFinalNode = document.querySelector("#pantalla-final");

// Función que se ejecuta al hacer clic en el botón de inicio
function inicioJuego() {
  pagina_inicio = false; // Cambiar el estado a juego en curso
  pantallaInicioNode.style.display = "none"; // Ocultar la pantalla de inicio
  pantallaJuegoNode.style.display = "flex";  // Mostrar la pantalla de juego
}

// Agregar un event listener al botón de inicio para activar la función inicioJuego
startButtonNode.addEventListener("click", inicioJuego);
