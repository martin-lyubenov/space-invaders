import { AddAlienCluster } from "./addObjects/addAlienCluster.js";
import { AddDefender } from "./addObjects/addDefender.js";
import { AddShields } from "./addObjects/addShields.js";
import { scene } from "./generalGameInfo/generalInfo.js";
import { gameAction, gameArea, gameOver } from "./main.js";
import { player } from "./player/player.js";
import { sounds } from "./sounds.js";

const startGame = document.querySelector(".start-game");

// collision detector
export function isCollision(firstElement, secondElement) {
  let firstRect = firstElement.getBoundingClientRect();
  let secondRect = secondElement.getBoundingClientRect();

  return !(
    firstRect.top > secondRect.bottom ||
    firstRect.bottom < secondRect.top ||
    firstRect.right < secondRect.left ||
    firstRect.left > secondRect.right
  );
}

// game over checker
export function gameOverAction() {
  scene.isActive = false;
  gameOver.classList.remove("hidden");
}

// start game
export function onGameStart() {
  startGame.classList.add("hidden");
  const defender = new AddDefender(player);

  player.height = defender.offsetHeight;
  player.width = defender.offsetWidth;

  new AddAlienCluster(0);
  new AddShields();
  sounds.backgroundMusic.play();

  let lives = document.querySelector(".lives-counter");
  for (let i = 0; i < 3; i++) {
    let live = document.createElement("div");
    live.classList.add("one-live");
    lives.appendChild(live);
  }

  window.requestAnimationFrame(gameAction);
}

// restat game option
export function gameRestart() {
  gameOver.classList.add("hidden");
  let alienCluster = document.querySelector(".alien-cluster");
  alienCluster.remove();
  let lazerShots = document.querySelectorAll(".lazer-shot");
  lazerShots.forEach((lazerShot) => lazerShot.remove());

  const defender = document.querySelector(".defender");
  defender.remove();

  let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
  alienLazerShots.forEach((alienLazerShot) => alienLazerShot.remove());

  let lives = document.querySelectorAll(".one-live");
  lives.forEach((live) => live.remove());

  player.x = 100;
  player.y = gameArea.offsetHeight - 50;
  player.width = 0;
  player.height = 0;
  player.lastTimeShot = 0;
  player.lives = 3;

  scene.score = 0;
  scene.lastAlienSpriteInterval = 0;
  scene.lastAlienLazerShotSpriteInterval = 0;
  scene.lastAlienLazerShot = 0;
  scene.lastSpawnMothership = 0;
  scene.isActive = true;

  onGameStart();
}
