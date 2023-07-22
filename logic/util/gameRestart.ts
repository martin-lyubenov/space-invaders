import { scene } from "../generalGameInfo/generalInfo";
import { IGameRestart } from "../models/buttons";
import { player } from "../player/player";
import { onGameStart } from "./startGame";

// logic for restarting the game once the player has lost all of their lives

export function gameRestart(
  gameArea: HTMLDivElement,
  gameOver: HTMLDivElement
) {
  // hides the game over screen
  gameOver.classList.add("hidden");

  //selects the alien cluster HTML div element
  const alienCluster = document.querySelector(
    ".alien-cluster"
  )! as HTMLDivElement;

  // removes the remaining alies from the screen
  alienCluster.remove();

  // selects all of the defender's lazer shorts HTML div elements on the screen and stores them in an array
  const lazerShots = document.querySelectorAll(".lazer-shot");
  // loops over the array and removes each of the lazer shorts
  lazerShots.forEach((lazerShot) => lazerShot.remove());

  // selects the defender HTML div element
  const defender = document.querySelector(".defender")! as HTMLDivElement;
  // removes the defender element from the screen
  defender.remove();

  // selects all alien lazer shorts HTML div elements on the screen and stores them in an array
  const alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
  // loops over the array and removes each of the lazer shorts elements from the screen
  alienLazerShots.forEach((alienLazerShot) => alienLazerShot.remove());

  // selects all player lives HTML div elements on the screen and stores them in an array
  const lives = document.querySelectorAll(".one-life");
  // loops over the array and removes each life element from the screen
  lives.forEach((life) => life.remove());

  // selects the shield field HTML div element on the screen
  const shields = document.querySelector(".shield-field")! as HTMLDivElement;
  // removes the shield field element from the screen
  shields.remove();

  // resets the player object stats
  player.x = 100;
  player.y = gameArea.offsetHeight - 50;
  player.width = 0;
  player.height = 0;
  player.lastTimeShot = 0;
  player.lives = 3;

  // resets the scene object stats
  scene.score = 0;
  scene.lastAlienSpriteInterval = 0;
  scene.lastAlienLazerShotSpriteInterval = 0;
  scene.lastAlienLazerShot = 0;
  scene.lastSpawnMothership = 0;
  scene.isActive = true;

  // runs the start game function so the game can start again
  onGameStart();
}
