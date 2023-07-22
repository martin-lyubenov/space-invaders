import { AddMothership } from "./addObjects/addMothership";
import { alienSpriteAnimation } from "./animations/alienSprites";
import { alienDeathAndPoints } from "./alienDeathAndPoints/alienDeathAndPoints";
import { game, scene } from "./generalGameInfo/generalInfo";
import { alienClusterMovement } from "./objectMovement/alienCluster";
import { alienLazerShotsMovmentAndCollisionChecker } from "./objectMovement/alienLazerShots";
import { lazerShotsMovement } from "./objectMovement/lazerShots";
import { playerMovement } from "./objectMovement/player";
import {
  playerMovementControlls,
  playerShootingControlls,
} from "./player/playerMovementControlls";
import { pointsUpdate } from "./points/pointsUpdate";
import { respawnAliens } from "./respwan/aliens";
import { sounds } from "./sounds/sounds";
import { alienFiringCycle } from "./alienFiringCycle/alienFiringCycle";
import { mothershipMovement } from "./objectMovement/mothership";

import { onGameStart } from "./util/startGame";
import { gameRestart } from "./util/gameRestart";

const startButton = document.querySelector(".start-button")! as HTMLDivElement;
let gameArea = document.querySelector(".game-area")! as HTMLDivElement;
const gameOver = document.querySelector(".game-over")! as HTMLDivElement;
const points = document.querySelector(".points")! as HTMLDivElement;

// backgournd music loop
sounds.backgroundMusic.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

// done to reduce types and easy of adding new parameters to the gameAction

// start game button event listener
startButton.addEventListener("click", () => {
  return onGameStart();
});

// game over and restart game event listener
gameOver.addEventListener("click", () => {
  return gameRestart(gameArea, gameOver);
});

let mothershipCurrentSound: HTMLAudioElement;

// game engine
export function gameAction(timestamp: number) {
  // during each frame the engine checks the state of the game and updates the screen accordingly

  // movement keys
  playerMovementControlls(gameArea);

  // shooting
  playerShootingControlls(
    timestamp //timestamp must always be added as it comes from the gameAction func itself
  );

  // apply player movement
  playerMovement();

  // add lazer movement
  lazerShotsMovement();

  // add alient cluster movement
  alienClusterMovement(gameArea);

  // alien death and points
  alienDeathAndPoints();

  // respawn aliens
  respawnAliens();

  // aliens sprite animation
  alienSpriteAnimation(timestamp);

  // aliens firing back (in self defence)
  alienFiringCycle(timestamp);

  // add movment and collision to alien lazer shots
  alienLazerShotsMovmentAndCollisionChecker(gameArea, gameOver, timestamp);

  // add mothership
  if (
    timestamp - scene.lastSpawnMothership >
    game.mothershipSpawnInterval + 50000 * Math.random()
  ) {
    const mothershipInstance = new AddMothership();
    mothershipCurrentSound = mothershipInstance.mothershipCurrentSound;
    scene.lastSpawnMothership = timestamp;
  }

  // add mothership movement
  mothershipMovement(mothershipCurrentSound);

  // updates the points
  pointsUpdate(points);

  if (scene.isActive) {
    window.requestAnimationFrame(gameAction);
  }
}
