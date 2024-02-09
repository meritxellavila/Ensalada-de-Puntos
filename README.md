# ENSALA DE PUNTOS

## [¡Juega!](https://meritxellavila.github.io/Ensalada-de-Puntos/)


# Descripción

Ensalada de puntos es un juego en el que los jugadores intentan recolectar verduras en un cuenco de ensalada.
El juego termina cuando recolectan alguno de los elementos que no son verduras.
Una vez finalizado el juego pasados 5s el  juego se reinicia regresando a la pantalla inicial.


# Principales funcionalidades

## (DOM-CANVAS)

- El cuenco se mueve con las teclas derecha y izquierda del teclado. 
- Las verduras aparecen en la parte superior de la pantalla desde ubicaciones aleatorias.
- El cuenco tiene que resolectar las verduras.
- El juego termina cuando recolectan elementos que no son verduras.
- Una vez recolectado algun elemento que no es verdura, el juego termina y se reinicia pasados 5s.

# Funcionalidades pendientes

- Agregar más velocidad al llegar a cierta pintuación para aumentar la dificultad a medida que avanza el juego.
- Agregar sonido al juego.

# Tecnologías utilizadas

- Enumere aquí todas las tecnologías utilizadas en el proyecto como HTML, CSS, Javascript, manipulación DOM, JS Canvas.

# Estados

- Pantallade inicio.
- Pantalla de juego.
- Pantalla de juego terminado.

# Estructura del proyecto

## main.js

- inicioJuego() {}
- pantallaInicioNode
- pantallaJuegoNode
- startButtonNode
- pantallaFinalNode


## cuenco.js

-   draw(){}
-   moverIzq(){}
-   moverDrh(){}
-   checkCollision(){}
-   updateGame(){}
-   clearRect(){}


## ingredientesEnsalada.js
-   draw() {}
-   randomIngredientes(){}


# Enlaces adicionales

### Diapositivas
[Enlace](https://prezi.com/view/iDaHIq6rIW4cXsgXenhk/)

## Desplegar
[Enlace](https://meritxellavila.github.io/Ensalada-de-Puntos/)