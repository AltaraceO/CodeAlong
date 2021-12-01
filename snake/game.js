import { snake_speed } from './snake';

let lastRenderTime = 0;

// game loop first - goes on forever
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //time in sec. since last render
  if (secondsSinceLastRender < 1 / snake_speed) return; // render the page only when snake speed requires higher randering -- adjusting the snake speed will directly control the refresh rate.
  console.log(secondsSinceLastRender);
  lastRenderTime = currentTime;

  //update creates all the logic of the game
  update();
  // draw will show update() logic on the screen
  draw();
}

window.requestAnimationFrame(main); //starts the main loop

function update() {}

function draw() {}
