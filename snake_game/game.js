import {
  update as updateSnake,
  draw as drawSnake,
  snake_speed,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

// game loop first - goes on forever
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //time in sec. since last render
  if (secondsSinceLastRender < 1 / snake_speed) return; // render the page only when snake speed requires higher randering -- adjusting the snake speed will directly control the refresh rate.
  lastRenderTime = currentTime;

  //update creates all the logic of the game
  update();
  // draw will show update() logic on the screen
  draw();
}

window.requestAnimationFrame(main); //starts the main loop

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
